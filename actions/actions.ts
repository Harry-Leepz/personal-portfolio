"use server";

export async function sendEmail(formData: FormData) {
  console.log("Sending email...");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));
}
