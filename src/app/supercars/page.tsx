import React from "react";
import ContactCard from "@/components/cards/ContactCard";
import SupercarCard from "@/components/cards/SupercarCard";

const Supercars = () => {
  return (
    <main className="pt-[91px] max-w-screen-2xl m-auto">
      <SupercarCard />
      <ContactCard />
    </main>
  );
};

export default Supercars;
