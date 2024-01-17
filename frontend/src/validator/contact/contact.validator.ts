import { ContactFormDocType } from "@/types/contact/contact.types";

interface isContactValidReturnTypeIfTrue {
  isValid: true;
  validData: ContactFormDocType;
  message: string;
}

interface isContactValidReturnTypeIfFalse {
  isValid: false;
  validData: null;
  message: string;
}

export type isContactValidReturnType =
  | isContactValidReturnTypeIfTrue
  | isContactValidReturnTypeIfFalse;

export const isContactValid = (contact: any): isContactValidReturnType => {
  const res: isContactValidReturnTypeIfFalse = {
    isValid: false,
    validData: null,
    message: "Fields marked with * are required",
  };
  if (typeof contact !== "object") {
    return {
      ...res,
    };
  }

  //normal contact
  //check subject
  const subject = contact.subject?.trim();
  const message = contact.message?.trim();
  const submittedAt = contact.submittedAt?.trim();
  const _id = contact._id?.trim();
  if (
    subject?.length < 1 ||
    message?.length < 1 ||
    _id?.length < 1 ||
    submittedAt?.length < 1
  ) {
    return res;
  }
  const email = contact.email?.trim();
  // check is email is valid using regex

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (contact.isReplyNecessary === true) {
    if (!emailRegex.test(email)) {
      return {
        ...res,
        message: "Please enter a valid email address to get back to you",
      };
    }
  }
  const name = contact.name?.trim();
  return {
    isValid: true,
    message: "",
    validData: {
      name,
      email,
      subject,
      message,
      submittedAt,
      isReplyNecessary: contact.isReplyNecessary,
      _id,
    },
  };
};

export const ContactFormInitialValues: ContactFormDocType = {
  name: "",
  email: "",
  subject: "",
  message: "",
  submittedAt: "",
  isReplyNecessary: false,
  _id: "",
};
