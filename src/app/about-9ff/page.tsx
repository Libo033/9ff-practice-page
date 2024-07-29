import React from "react";
import ContactCard from "@/components/cards/ContactCard";
import AboutHeader from "@/components/others/AboutHeader";
import OurMission from "@/components/cards/OurMission";

const About9ff = () => {
  return (
    <main className="pt-[91px] max-w-screen-2xl m-auto">
      <section className="flex flex-col gap-6">
        <AboutHeader />
        <OurMission />
      </section>
      <ContactCard />
    </main>
  );
};

export default About9ff;
