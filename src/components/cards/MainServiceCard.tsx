import { MainServicesCard } from "@/Libs/interfaces";
import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const MainServiceCard = ({
  id,
  image,
  title,
  info,
  button,
}: Readonly<MainServicesCard>) => {
  return (
    <article
      className={
        "border-2 rounded-lg md:flex " +
        (id % 2 === 0 ? "md:flex-row-reverse" : "")
      }
    >
      <div className="rounded-t-lg md:w-1/2 lg:h-[300px]">
        <Image
          className={
            "rounded-t-md md:rounded-none md:h-full md:object-cover " +
            (id % 2 === 0 ? "md:rounded-r-md" : "md:rounded-l-md")
          }
          src={image}
          alt={title}
          width={1600}
          height={1200}
        />
      </div>
      <div className="p-3 md:w-1/2 md:flex md:flex-col md:px-6">
        <p className="text-xl font-medium md:text-lg xl:text-xl">{title}</p>
        <p className="text-pretty text-sm pt-3 xl:text-base whitespace-pre-line">
          {info}
        </p>
        <div className="h-full flex items-end justify-end">
          <p className="uppercase pt-4 flex justify-end items-center gap-1 underline decoration-[#b0a17b]">
            {button}
            <ArrowForward sx={{ fontSize: "18px", color: "#b0a17b" }} />
          </p>
        </div>
      </div>
    </article>
  );
};

export default MainServiceCard;
