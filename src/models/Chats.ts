import mongoose from "mongoose";
import { randomUUID } from "crypto";

const ChatSchema = new mongoose.Schema({
  chats: {
    type: [
      {
        role: {
          type: String,
          required: true,
        },
        parts: [
          {
            text: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
    default: [],
  },
  credits: {
    type: Number,
    default: 25,
  },
  creditsExpireAt: {
    type: String,
    default: "",
  },
});

export default mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
