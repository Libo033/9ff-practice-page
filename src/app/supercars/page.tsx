import React from "react";
import ContactCard from "@/components/cards/ContactCard";
import SupercarCard from "@/components/cards/SupercarCard";
import { SupercarCardProps } from "@/Libs/interfaces";

const supercars: SupercarCardProps[] = [
  {
    title: "9FF GTurbo",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722447641/08-9ff-practice-page/qpzyeyvi5kdujhygadz2.jpg",
    phrase: "GTurbo - a name for those hundry for performance",
    redirect: "",
  },
  {
    title: "9FF GTronic",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722447600/08-9ff-practice-page/xd7owfovqpmt7ssdioif.jpg",
    phrase: "GTronic - acceleration is it's passion",
    redirect: "",
  },
  {
    title: "9FF GT9",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722447616/08-9ff-practice-page/utf1pc5omszdiqljjkoa.jpg",
    phrase: "GT9 - our masterpiece in terms of performance",
    redirect: "",
  },
  {
    title: "9FF Speed9",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722447635/08-9ff-practice-page/wkpfspdhoa7ngkz0ppjg.jpg",
    phrase: "Speed9 - Allow us to get you fresh thoughts",
    redirect: "",
  },
];

const Supercars = () => {
  return (
    <main className="pt-[91px] max-w-screen-2xl m-auto">
      <section className="flex flex-col gap-6 my-8">
        {supercars.map((c) => (
          <SupercarCard key={c.image} {...c} />
        ))}
      </section>
      <ContactCard />
    </main>
  );
};

export default Supercars;
