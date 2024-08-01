"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SupercarCard = () => {
  const [hoverCard, setHoverCard] = useState<boolean>(false);
  const supercarCard = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    supercarCard.current?.addEventListener("mouseenter", (e) => {
      setHoverCard(true);
    });
    supercarCard.current?.addEventListener("mouseleave", (e) => {
      setHoverCard(false);
    });
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-32">
      <div
        ref={supercarCard}
        className="h-[350px] relative flex items-center justify-center cursor-pointer duration-200"
      >
        <Image
          className="h-full object-cover object-center rounded-lg"
          src={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722447641/08-9ff-practice-page/qpzyeyvi5kdujhygadz2.jpg"
          }
          alt="9FF"
          width={1960}
          height={1308}
        />
        <p className="absolute z-40 text-white text-3xl font-medium translate-y-[-50%]">
          9FF GTurbo
        </p>
        <p
          className={`absolute z-40 tracking-wider translate-y-5 duration-200 ${
            hoverCard ? "text-[#f8dfa3]" : "text-transparent"
          }`}
        >
          GTurbo - a name for those hungry for performance
        </p>
        <span
          className={`absolute w-full h-full z-30 bg-black rounded-lg duration-200 ${
            hoverCard ? "opacity-45" : "opacity-0"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default SupercarCard;
