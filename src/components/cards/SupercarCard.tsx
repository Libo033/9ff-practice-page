"use client";
import { SupercarCardProps } from "@/Libs/interfaces";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SupercarCard = ({
  title,
  image,
  phrase,
}: Readonly<SupercarCardProps>) => {
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
    <article className="px-4 md:px-8 lg:px-32">
      <div
        ref={supercarCard}
        className="h-[350px] relative flex items-center justify-center cursor-pointer duration-200"
      >
        <Image
          className="h-full object-cover object-center rounded-lg"
          src={image}
          alt={title}
          width={1960}
          height={1308}
        />
        <p className="absolute z-40 text-white text-3xl font-medium translate-y-[-50%]">
          {title}
        </p>
        <p
          className={`absolute z-40 tracking-wider translate-y-5 duration-200 ${
            hoverCard ? "text-[#f8dfa3]" : "text-transparent"
          }`}
        >
          {phrase}
        </p>
        <span
          className={`absolute w-full h-full z-30 bg-black rounded-lg duration-200 ${
            hoverCard ? "opacity-45" : "opacity-0"
          }`}
        ></span>
      </div>
    </article>
  );
};

export default SupercarCard;
