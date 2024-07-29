import { TimelineCardProps } from "@/Libs/interfaces";
import Image from "next/image";
import React from "react";

const TimelineCard = ({
  year,
  car,
  description,
  image,
}: Readonly<TimelineCardProps>) => {
  return (
    <div className="flex flex-col items-center pt-12 w-full">
      <p className="z-10 bg-white text-gray-500 text-sm text-center py-1 px-4 mb-3 rounded-lg border-2 border-[#b0a17b]">
        {year}
      </p>
      <article className="relative shadow-lg flex items-end z-10 w-full h-72 rounded-lg sm:w-96 xl:w-[30rem] xl:h-80">
        <div className="z-20 w-full py-1 px-2 rounded-b-lg bg-gray-900 bg-opacity-50">
          <p className="text-white font-medium text-lg pt-1">{car}</p>
          <p className="text-white text-sm pb-1">{description}</p>
        </div>
        <Image
          className="absolute w-full h-full object-cover rounded-lg"
          src={image}
          alt={car}
          width={1200}
          height={1200}
        />
      </article>
    </div>
  );
};

export default TimelineCard;
