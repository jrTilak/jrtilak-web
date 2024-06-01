export type IChat = {
  chats: {
    role: string;
    parts: {
      text: string;
    }[];
  }[];
  credits: number;
};
