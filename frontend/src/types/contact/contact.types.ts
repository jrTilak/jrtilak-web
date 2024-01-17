export interface ContactFormDocType {
  name?: string;
  email?: string;
  subject: string;
  message: string;
  submittedAt: string;
  isReplyNecessary: boolean;
  _id: string;
}
