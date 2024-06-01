"use client";
import { handleGetUserChats, handleSendMessage } from "@/services/chats";
import { IChat } from "@/types/chat.types";
import { MessageCircle, X } from "lucide-react";
import { set } from "mongoose";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";
import ReactLoading from "react-loading";

const ChatWithAI = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatsFetching, setIsChatsFetching] = useState(true);
  const [isChatSending, setIsChatSending] = useState(false);
  const [chats, setChats] = useState<IChat["chats"]>([]);
  const [credits, setCredits] = useState(0);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    (() => {
      handleGetUserChats().then((data) => {
        setChats(data.chats);
        setCredits(data.credits);
        setIsChatsFetching(false);
        chatContainerRef.current?.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      });
    })();
  }, []);

  useEffect(() => {
    if (isChatOpen) {
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isChatOpen]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userMessage) return;
    if (credits <= 0) {
      toast.error("You have no credits left. Please try again tomorrow.");
      return;
    }
    if (isChatSending) return;
    setIsChatSending(true);
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
    handleSendMessage(userMessage)
      .then((response) => {
        console.log(response);
        setChats((prev) => [
          ...prev,
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
          {
            role: "model",
            parts: [{ text: response }],
          },
        ]);
        setUserMessage("");
        setCredits((prev) => prev - 1);
        setIsChatSending(false);
      })
      .catch((error) => {
        toast.error(error);
        setIsChatSending(false);
      })
      .finally(() => {
        chatContainerRef.current?.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  return (
    <>
      <div
        style={{
          scale: isChatOpen ? 0 : 1,
        }}
        className="fixed bottom-0 right-0 mb-4 mr-4 z-40"
      >
        <button
          onClick={() => setIsChatOpen((prev) => !prev)}
          className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300 flex items-center"
        >
          Chat with Prime AI <MessageCircle className="ml-3" />
        </button>
      </div>
      <div
        style={{
          scale: isChatOpen ? 1 : 0,
        }}
        id="chat-container"
        className="fixed bottom-16 right-4 w-96 z-40"
      >
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-indigo-400 text-white rounded-t-lg flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Prime AI</span>
              <span className="text-sm text-muted">
                Ask anything about jrTilak (Credits: {credits})
              </span>
            </div>
            <button
              onClick={() => setIsChatOpen((prev) => !prev)}
              id="close-chat"
              className="hover:text-gray-300"
            >
              <X />
            </button>
          </div>
          <div
            ref={chatContainerRef}
            className="p-4 h-80 overflow-y-auto prose-sm prose-p:m-0 prose-a:text-blue-400 prose-a:underline"
          >
            {chats.map((chat, index) => {
              if (chat.role === "user") {
                return (
                  <div key={index} className="mb-2 text-right">
                    <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                      <Markdown>{chat.parts[0].text}</Markdown>
                    </p>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="mb-2">
                    <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                      <Markdown>{chat.parts[0].text}</Markdown>
                    </p>
                  </div>
                );
              }
            })}
          </div>
          <form onSubmit={onSubmit} className="p-4 border-t flex">
            <input
              type="text"
              placeholder="Type a message"
              value={userMessage}
              disabled={isChatSending}
              onChange={(e) => setUserMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              disabled={isChatSending}
              className="bg-blue-500 text-white disabled:opacity-80 px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              {isChatSending ? (
                <ReactLoading type="bubbles" height={20} width={20} />
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatWithAI;
