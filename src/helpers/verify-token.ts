import jwt from "jsonwebtoken";

export const verifyToken = async (token: string) => {
  let id: string | null = null;
  if (!token || token.trim() === "") {
    return id;
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err: any, success: any) => {
    if (err) {
      id = null;
    } else {
      // it should have been id instead of email
      id = success.email;
    }
  });
  return id;
};
