"use client";
import SocialLink from "./SocialLink";
import { useState, useEffect } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import { Button } from "../ui/button";
import generateId, { formatDateTime } from "@/utils/generateId";
import { socialLinks } from "@/components/shared/SocialLinks";
import { ContactFormDocType } from "@/types/contact/contact.types";
import {
  ContactFormInitialValues,
  isContactValid,
} from "@/validator/contact/contact.validator";
import { SendHorizontal } from "lucide-react";

const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(ContactFormInitialValues);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  useEffect(() => {
    const formData = localStorage.getItem("formData");
    if (typeof formData === "string" && formData.length > 0) {
      try {
        const formData = JSON.parse(localStorage.getItem("formData") || "");
        setFormData(formData);
      } catch (error) {
        console.error("Local storage parse failed");
        localStorage.removeItem("formData");
      }
    } else {
      console.log("No local storage data found");
    }
  }, []);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    const { isValid, validData, message } = isContactValid(formData);
    if (!isValid) {
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
      return;
    }
    setIsFormSubmitting(true);
    const res = await fetch(`${WEBSITE_URL}/api/v1/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        uid: "",
      },
      body: JSON.stringify(validData),
    });
    if (res.status === 200) {
      toast({
        title: "Success",
        description: "Your message has been sent successfully.",
        variant: "default",
      });
      setIsFormSubmitting(false);
      localStorage.removeItem("formData");
      setFormData(ContactFormInitialValues);
    } else {
      toast({
        title: "Failed",
        description: "Your message could not be sent. Please try again later",
        variant: "destructive",
      });
      setIsFormSubmitting(false);
    }
  };

  const handleFormCancel = () => {
    setFormData(ContactFormInitialValues);
    localStorage.removeItem("formData");
  };

  const handleFormDataChange = (e: any) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    setFormData((prev: ContactFormDocType) => {
      return {
        ...prev,
        submittedAt: formatDateTime(new Date()),
        _id: generateId(prev.subject),
        [targetName]: targetValue,
      };
    });
    // savedata to localstorage
    localStorage.setItem(
      "formData",
      JSON.stringify({
        ...formData,
        submittedAt: formatDateTime(new Date()),
        _id: generateId(formData.subject),
        [targetName]: targetValue,
      })
    );
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
          {socialLinks.map((link) => {
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
              value={formData.email}
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
          <div className="flex sm:justify-between w-full px-3 flex-col gap-2 sm:flex-row">
            <div className="md:flex md:items-center sm:self-start cursor-pointer">
              <label className=" text-muted-foreground font-bold flex items-center justify-center">
                <input
                  onChange={(e) => {
                    setFormData((prev: ContactFormDocType) => {
                      return {
                        ...prev,
                        isReplyNecessary: !prev.isReplyNecessary,
                      };
                    });
                  }}
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="isReplyNecessary"
                  name="isReplyNecessary"
                  checked={formData.isReplyNecessary}
                />
                <span className="text-sm">I want your response ASAP !!</span>
              </label>
            </div>
            <div className="flex items-center justify-center gap-4 sm:self-end">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button role="button" type="button" variant="outline">
                    Cancel
                  </Button>
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
              <Button
                variant="purple"
                onClick={(e) => handleFormSubmit(e)}
                type="submit"
              >
                {isFormSubmitting ? "Sending..." : "Send"}
                <SendHorizontal className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
