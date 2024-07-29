import Image from "next/image";
import React from "react";

const AboutHeader = () => {
  return (
    <div className="px-4 md:px-8 lg:px-32">
      <div className="flex justify-center">
        <ul className="bg-white rounded-b-lg shadow-md pt-4 w-full inline-flex items-center justify-center flex-wrap">
          <li>
            <Image
              className="p-1 pr-0 max-w-[90px]"
              src={
                "https://res.cloudinary.com/dsuydyqgz/image/upload/v1721866590/08-9ff-practice-page/hocnqmykgwyg9xjq6vpb.png"
              }
              alt="9ff logo"
              width={180}
              height={240}
            />
          </li>
          <li>
            <Image
              className="p-4 pl-0"
              src={
                "https://res.cloudinary.com/dsuydyqgz/image/upload/v1720719174/08-9ff-practice-page/mgvj3drclxfl1jw0oukr.png"
              }
              alt="9ff logo"
              width={173}
              height={37}
            />
          </li>
          <li className="w-full pt-4 pb-6">
            <p className="px-2 text-center text-xl text-pretty font-light">
              'With attention to detail, we achieve impressive performance'
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutHeader;
