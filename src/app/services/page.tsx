import React from "react";
import ContactCard from "@/components/cards/ContactCard";

const Services = () => {
  return (
    <main className="pt-[91px] max-w-screen-2xl m-auto">
      <div className="px-4 md:px-8 lg:px-32">
        <p className="bg-white rounded-lg shadow-lg mt-4 py-4 text-xl text-center font-semibold border-4 border-[#b0a17b]">
          SERVICES FOR OUR CUSTOMERS
        </p>
      </div>
      <ContactCard />
    </main>
  );
};

export default Services;
