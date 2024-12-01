"use server";

import { Resend } from "resend";

import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(message, 500)) {
    return { error: "Message is required" };
  }

  if (!validateString(senderEmail, 5000)) {
    return { error: "Email is required" };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "hdhillon478@gmail.com",
      subject: "Message from portfolio contact form",
      replyTo: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
}
