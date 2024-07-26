import ContactForm from "@/components/Form/ContactForm";
import ContactInfo from "@/components/others/ContactInfo";
import React from "react";

const Contact = () => {
  return (
    <main className="pt-[91px] max-w-screen-2xl m-auto">
      <ContactForm />
      <ContactInfo />
    </main>
  );
};

export default Contact;
