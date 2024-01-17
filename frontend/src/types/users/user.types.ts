export interface UserDocType {
  displayName: string;
  isEmailVerified: boolean;
  isAnonymous: boolean;
  img: string;
  email: string;
  uid: string;
  role: "owner" | "admin" | "user";
}
