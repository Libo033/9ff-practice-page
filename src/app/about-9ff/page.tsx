import React from "react";
import ContactCard from "@/components/cards/ContactCard";
import AboutHeader from "@/components/others/AboutHeader";
import OurMission from "@/components/cards/OurMission";
import Image from "next/image";

const About9ff = () => {
  return (
    <main className="pt-[91px] max-w-screen-2xl m-auto">
      <section className="flex flex-col gap-6">
        <AboutHeader />
        <div className="px-4 h-40 rounded-lg md:px-8 md:h-52 lg:px-32 lg:h-80 2xl:h-96">
          <Image
            className="h-full flex justify-center rounded-lg object-cover"
            src={
              "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722260245/08-9ff-practice-page/ztzenerc78tje1blumsh.jpg"
            }
            alt="9ff gturbo 1200"
            width={1200}
            height={750}
          />
        </div>
        <OurMission />
      </section>
      <ContactCard />
    </main>
  );
};

export default About9ff;
