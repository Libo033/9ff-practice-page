import Image from "next/image";
import React from "react";

const HomeFlyer = () => {
  return (
    <div className="relative h-fit w-full max-w-screen-2xl flex z-0">
      <Image
        className="md:px-6 lg:px-12"
        src={
          "https://res.cloudinary.com/dsuydyqgz/image/upload/v1721670647/08-9ff-practice-page/ex8byioormtbgs7vcosn.jpg"
        }
        alt="9ff 992"
        width={1595}
        height={1080}
      />
      <div className="absolute h-full w-full flex flex-col justify-center items-center">
        <p className="font-bold text-white text-3xl opacity-60 md:text-4xl md:opacity-80">
          Welcome
        </p>
        <p className="font-bold text-white text-2xl opacity-60 md:text-4xl md:opacity-80">
          9FF GERMAN ENGINEERING
        </p>
      </div>
    </div>
  );
};

export default HomeFlyer;
