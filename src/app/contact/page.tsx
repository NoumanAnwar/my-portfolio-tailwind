import ContactForm from "@/components/contactform";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center bg-slate-600"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-20 bottom-16 w-[60%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  )
};

export default Page;