"use client";
import SocialLink from "./SocialLink";
import { useState, useEffect, useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { SendHorizontal } from "lucide-react";
import toast from "react-hot-toast";

import emailjs from "@emailjs/browser";
import SOCIAL_LINKS from "@/assets/json/sockialLinks";
import GAButton from "../Analytics/GAButton";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.subject.length === 0 || formData.message.length === 0) {
      toast.error("Please fill all the required fields.");
      submitButtonRef.current?.classList.add(
        "animate__animated",
        "animate__headShake"
      );
      setTimeout(() => {
        submitButtonRef.current?.classList.remove(
          "animate__animated",
          "animate__headShake"
        );
      }, 1000);
      return;
    }
    setIsFormSubmitting(true);
    const contact: Promise<any> = new Promise(async (resolve, reject) => {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY || "",
        { ...formData, date: new Date().toLocaleString() },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      if (res.status === 200) {
        resolve(res);
      } else {
        reject(res);
      }
    });
    toast.promise(contact, {
      error: () => {
        setIsFormSubmitting(false);
        return "Something went wrong. Please try again later.";
      },
      success: () => {
        setIsFormSubmitting(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        return "Thank you for your message. I will get back to you as soon as possible.";
      },
      loading: "Sending message..., Please wait!",
    });
  };

  const handleFormCancel = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleFormDataChange = (e: any) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    setFormData((prev: any) => {
      return { ...prev, [targetName]: targetValue };
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 sm:border">
      <div className="bg-gray-900 md:col-span-4 p-10 text-background">
        <h3 className="text-3xl sm:text-4xl leading-normal text-gray-300 font-extrabold tracking-tight">
          Get In <span className="text-primary dark:text-white">Touch</span>
        </h3>
        <p className="mt-4 leading-7 text-muted-foreground">
          Contact me for any queries, suggestions or anything. I will try to get
          back to you as soon as possible.
        </p>

        <div className="flex flex-col gap-4 mt-4">
          {SOCIAL_LINKS.map((link) => {
            return (
              <SocialLink
                href={link.href}
                icon={link.icon}
                type={link.type}
                key={link.type}
                username={link.username}
              />
            );
          })}
        </div>
      </div>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="md:col-span-8 p-1 sm:p-10 pb-2 mt-4 sm:mt-0"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-foreground text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-muted text-muted-foreground border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleFormDataChange(e)}
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-foreground text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-muted text-muted-foreground border  rounded py-3 px-4 leading-tight focus:outline-none  focus:border-primary"
              id="email"
              type="email"
              name="email"
              placeholder="yourname@example.com"
              // value={formData.email}
              onChange={(e) => handleFormDataChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-foreground text-xs font-bold mb-2"
              htmlFor="subject"
            >
              Subject*
            </label>
            <input
              name="subject"
              autoComplete="off"
              className="appearance-none block w-full bg-muted text-muted-foreground border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-primary"
              id="subject"
              type="text"
              placeholder="..."
              value={formData.subject}
              onChange={(e) => handleFormDataChange(e)}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-foreground text-xs font-bold mb-2"
              htmlFor="message"
            >
              Your Message*
            </label>
            <textarea
              rows={10}
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleFormDataChange(e)}
              placeholder="Hello! I am writing this message ..."
              className="appearance-none block w-full bg-muted text-muted-foreground border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
            ></textarea>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-4 sm:self-end w-full">
            <AlertDialog>
              <AlertDialogTrigger>
                <GAButton
                  ga={{
                    category: "Contact Form",
                    action: "Reset",
                    label: "Contact Form",
                  }}
                  role="button"
                  type="button"
                  variant="outline"
                >
                  Cancel
                </GAButton>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will reset the form data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleFormCancel}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <GAButton
              ga={{
                category: "Contact Form",
                action: "Submit",
                label: "Contact Form",
              }}
              ref={submitButtonRef}
              variant="purple"
              type="submit"
            >
              {isFormSubmitting ? "Sending..." : "Send"}
              <SendHorizontal className="ml-2 w-4 h-4" />
            </GAButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
