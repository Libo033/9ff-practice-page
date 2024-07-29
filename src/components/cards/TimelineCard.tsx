import Image from "next/image";
import React from "react";

const TimelineCard = () => {
  return (
    <div className="flex flex-col items-center pt-12 w-full">
      <p className="z-10 bg-white text-gray-500 text-sm text-center py-1 px-4 mb-3 rounded-lg border-2 border-[#b0a17b]">
        2004
      </p>
      <article className="relative shadow-lg flex items-end z-10 w-full h-72 rounded-lg sm:w-96 xl:w-[30rem] xl:h-80">
        <div className="z-20 w-full py-1 px-2 rounded-b-lg bg-gray-900 bg-opacity-50">
          <p className="text-white font-medium text-lg pt-1">9FF 9F-T6</p>
          <p className="text-white text-sm pb-1">
            Fastest Porsche in Nardo - 372 km / h
          </p>
        </div>
        <Image
          className="absolute w-full h-full object-cover rounded-lg"
          src={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722265009/08-9ff-practice-page/mqyuho1lo0nrzgrky8qk.jpg"
          }
          alt=""
          width={1200}
          height={1200}
        />
      </article>
    </div>
  );
};

export default TimelineCard;
