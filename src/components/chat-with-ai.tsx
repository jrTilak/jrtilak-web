"use client";
import { MessageCircle, X } from "lucide-react";
import React, { useState } from "react";

const ChatWithAI = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <div
        style={{
          scale: isChatOpen ? 0 : 1,
        }}
        className="fixed bottom-0 right-0 mb-4 mr-4"
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
        className="fixed bottom-16 right-4 w-96"
      >
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-indigo-400 text-white rounded-t-lg flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Prime AI</span>
              <span className="text-sm text-muted">
                Ask anything about jrTilak (Tilak Thapa)
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
          <div id="chatbox" className="p-4 h-80 overflow-y-auto">
            {/* <!-- Chat messages will be displayed here --> */}
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                hello
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                this example of chat
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                design with tailwind
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
          </div>
          <div className="p-4 border-t flex">
            <input
              id="user-input"
              type="text"
              placeholder="Type a message"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              id="send-button"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWithAI;
