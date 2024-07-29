import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <div className="px-4 md:px-8 lg:px-32">
      <article className="relative bg-white rounded-lg shadow-md p-6 pb-8 w-full inline-flex items-center justify-center flex-wrap">
        <p className="w-full text-left pb-4 text-2xl font-semibold underline decoration-[#b0a17b] text-black">
          OUR MISSION
        </p>
        <p className="text-pretty">
          9FF is internationally known for fast, street-approved sports cars. It
          will always remain our claim to build world record vehicles. But
          strength and performance is only one side of 9FF. On the other hand,
          9FF stands for aesthetics and individuality. As a result, 9FF offers a
          complete program for individualization. 9FF makes sports cars even
          more personal and sporty and offers exclusive and mature products for
          this.
          <br />
          <br className="sm:hidden" />
          9FF also stands for uncompromising quality - combined with German
          engineering - and the guarantee of a vehicle manufacturer approved by
          the Federal Motor Transport Authority.
          <br />
          <br />
          <span className="font-medium">So driving a 9FF is special.</span>
        </p>
        <Image
          className="absolute opacity-15 w-80 sm:w-48"
          src={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1721866590/08-9ff-practice-page/hocnqmykgwyg9xjq6vpb.png"
          }
          alt="9ff logo"
          width={180}
          height={240}
        />
      </article>
    </div>
  );
};

export default OurMission;
