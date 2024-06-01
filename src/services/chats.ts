import { IChat } from "@/types/chat.types";
import axios from "axios";

export const handleGetUserChats = (): Promise<IChat> => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/chats", {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleSendMessage = async (message: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "/api/chats",
        {
          message,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};
