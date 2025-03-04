"use client";

import { useRef, useState } from "react";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(false);
    setErrorMessage(false);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage(true);
        formRef.current.reset();
      } else {
        setErrorMessage(true);
      }
    } catch {
      setErrorMessage(true);
    }
  };

  return (
    <div className="bg-no-repeat mx-5 bg-cover contact-container bg-black bg-blend-darken">
      <div className="min-h-screen rounded-md bg-img-overlay pt-12 pb-20">
        <div className="text-center text-white py-12 space-y-2">
          <h2 className="text-3xl lg:text-4xl font-bold font-mono">
            Contact Our Team
          </h2>
          <h3>Have any questions? We love to hear from you.</h3>
        </div>
        <div className="flex flex-col justify-center items-center container mx-auto px-8 gap-6">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="max-w-[700px] space-y-2 p-5 bg-base-100 rounded-lg"
          >
            <input
              required
              type="text"
              name="from_name"
              placeholder="Enter your name"
              className="w-full border rounded-lg py-2 text-lg pl-3 hover:border-primary duration-300"
            />
            <input
              required
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="w-full border rounded-lg py-2 text-lg pl-3 hover:border-primary duration-300"
            />
            <input
              required
              type="text"
              name="mail_subject"
              placeholder="Enter your Subject"
              className="w-full border rounded-lg py-2 text-lg pl-3 hover:border-primary duration-300"
            />
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Write your message"
              className="w-full text-black border rounded-lg py-1 text-xl pl-3 hover:border-primary duration-300"
            />
            <button
              className="px-5 py-3 border bg-primary duration-300 hover:bg-[#6f49c7] rounded-lg text-lg w-full text-white"
              type="submit"
            >
              Submit Now
            </button>
          </form>

          {successMessage && (
            <div className="max-w-[657px] bg-emerald-50 px-2 py-3 text-sm text-emerald-500 border border-emerald-100 rounded">
              ✅ Message Sent Successfully! Thanks for your feedback.
            </div>
          )}
          {errorMessage && (
            <div className="max-w-[657px] bg-red-50 px-2 py-3 text-sm text-red-500 border border-red-100 rounded">
              ❌ Error sending message. Please try again later.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
