import { SYSTEM_INSTRUCTIONS } from "@/assets/constants/instructions";
import { AUTH_TOKEN } from "@/assets/constants/tokens";
import genAI from "@/config/gemini.config";
import dbConnect from "@/db/connect";
import { createToken } from "@/helpers/create-token";
import { verifyToken } from "@/helpers/verify-token";
import Chats from "@/models/Chats";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const body: {
      message: string;
    } = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({
        message: "Message is empty.",
      });
    }

    //get cookie
    const cookie = req.cookies.get(AUTH_TOKEN);
    const userId = await verifyToken(cookie?.value ?? "");

    if (!userId) {
      return NextResponse.json({
        message: "Unauthorized",
      });
    }

    const userChats = await Chats.findById(userId);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTIONS,
    });

    console.log(userChats);
    const chat = model.startChat({
      history: (userChats.chats || []).map((chat: any) => {
        return {
          role: chat.role,
          parts: chat.parts.map((part: any) => {
            return {
              text: part.text,
            };
          }),
        };
      }),
      generationConfig: {
        maxOutputTokens: 400,
      },
    });

    userChats.chats.push({
      role: "user",
      parts: [{ text: message }],
    });

    const result = await chat.sendMessage(message);
    const r = await result.response;
    const text = r.text();

    userChats.chats.push({
      role: "model",
      parts: [{ text: text }],
    });

    userChats.credits -= 1;

    if (userChats.credits <= 0) {
      userChats.creditsExpireAt = new Date().toISOString();
    }

    await userChats.save();
    const response = {
      status: 200,
      message: "OK",
      data: text,
    };
    return NextResponse.json(response);
  } catch (e: any) {
    return NextResponse.json(
      {
        message:
          e.message ?? "Unexpected error occurred. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const cookie = req.cookies.get(AUTH_TOKEN);
    const userId = await verifyToken(cookie?.value ?? "");

    if (!userId) {
      // create a new chat
      const user = new Chats({
        chats: [],
      });
      await user.save();
      const token = createToken(user._id);
      const cookieStore = cookies();
      cookieStore.set(AUTH_TOKEN, token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
        domain: process.env.FRONTEND_DOMAIN,
      });
      return NextResponse.json({
        chats: [],
        credits: 25,
        message: "No chats found.",
      });
    }

    const userChats = await Chats.findById(userId);
    // if user has no credits, and creditsExpireAt is at  least 24 hours ago, reset credits
    if (!userChats) {
      // create a new chat
      const user = new Chats({
        chats: [],
      });
      await user.save();
      const token = createToken(user._id);
      const cookieStore = cookies();
      cookieStore.set(AUTH_TOKEN, token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
        domain: process.env.FRONTEND_DOMAIN,
      });
      return NextResponse.json({
        chats: [],
        credits: 25,
        message: "No chats found.",
      });
    }

    const creditsExpireAt = new Date(userChats.creditsExpireAt).getTime();
    const now = new Date().getTime();
    const shouldResetCredits = now - creditsExpireAt >= 24 * 60 * 60 * 1000;
    if (shouldResetCredits) {
      userChats.credits = 25;
      userChats.creditsExpireAt = "";
      await userChats.save();
    }

    return NextResponse.json({
      chats: userChats.chats,
      message: `Welcome back!`,
      credits: shouldResetCredits ? 25 : userChats.credits,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "Unexpected error occurred. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
};
