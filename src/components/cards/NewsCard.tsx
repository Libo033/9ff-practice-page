import { NewsCardProps } from "@/Libs/interfaces";
import Image from "next/image";
import React from "react";

const NewsCard = ({ image, title, info, reverse }: Readonly<NewsCardProps>) => {
  return (
    <article
      className={
        "bg-white mt-2 border-2 rounded md:flex " +
        (reverse ? " md:flex-row-reverse" : "")
      }
    >
      <div className="p-2 h-[270px] flex sm:h-[360px] sm:p-4 md:w-1/2 xl:w-7/12">
        <Image
          className="rounded-sm object-cover"
          src={image[0]}
          alt={title}
          width={1440}
          height={1440}
        />
      </div>
      <div className="px-2 sm:px-4 md:w-1/2 md:flex md:flex-col md:justify-between md:py-4 xl:w-5/12">
        <div>
          <p className="font-medium text-lg text-pretty md:text-2xl md:font-normal md:uppercase">
            {title}
          </p>
          <p className="pt-2 text-sm text-pretty md:text-lg md:font-light md:pt-2">
            {info}
          </p>
        </div>
        <p className="hidden py-4 text-xs text-center font-light text-[#b0a17b] md:block">
          9FF GERMAN ENGINEERING
        </p>
      </div>
      <div className="px-2 w-full md:hidden">
        <p className="px-2 py-4 text-xs text-center font-light text-[#b0a17b]">
          9FF GERMAN ENGINEERING
        </p>
      </div>
    </article>
  );
};

export default NewsCard;
