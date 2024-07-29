import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-white border-2 mb-8 mx-4 sm:relative sm:mx-20 md:mx-32 lg:mx-64 xl:mx-[27%] 2xl:mx-[30%]">
      <div className="flex flex-col p-4 gap-6 sm:flex-row sm:justify-around">
        <div className="sm:w-1/2">
          <p className="text-2xl text-[#b0a17b] font-bold uppercase underline decoration-black sm:text-xl sm:text-right">
            address
          </p>
          <p className="sm:text-sm sm:text-right">9FF engineering GmbH</p>
          <p className="sm:text-sm sm:text-right">Rüdigerstr. 3rd</p>
          <p className="sm:text-sm sm:text-right">44319 Dortmund</p>
          <p className="sm:text-sm sm:text-right">Germany</p>
        </div>
        <div className="sm:w-1/2">
          <p className="text-2xl text-[#b0a17b] font-bold uppercase underline decoration-black sm:text-xl">
            email
          </p>
          <p className="sm:text-sm">Service requests:</p>
          <p className="text-blue-500 underline sm:text-sm">email@9ff.com</p>
          <p className="sm:text-sm">General inquiries:</p>
          <p className="text-blue-500 underline sm:text-sm">email@9ff.com</p>
          <p className="sm:text-sm">Press inquiries:</p>
          <p className="text-blue-500 underline sm:text-sm">email@9ff.com</p>
        </div>
      </div>
      <div className="flex flex-col p-4 gap-6 sm:flex-row sm:justify-around">
        <div className="sm:w-1/2">
          <p className="text-2xl text-[#b0a17b] font-bold uppercase underline decoration-black sm:text-xl sm:text-right">
            business times
          </p>
          <p className="sm:text-sm sm:text-right">
            Monday to Thursday 8 a.m. - 5 p.m.
          </p>
          <p className="sm:text-sm sm:text-right">Fridays 8 a.m. - 3 p.m.</p>
          <p className="sm:text-sm sm:text-right">Saturday by appointment</p>
          <p className="sm:text-sm sm:text-right">Closed on Sunday</p>
        </div>
        <div className="sm:w-1/2">
          <p className="text-2xl text-[#b0a17b] font-bold uppercase underline decoration-black sm:text-xl">
            telephone
          </p>
          <p className="sm:text-sm">+99 99 99 99 9999</p>
        </div>
      </div>
      <span className="sm:absolute sm:border border-[#b0a17b50] sm:w-[94%] sm:bottom-[50%] sm:translate-y-3 sm:mx-[3%]"></span>
      <span className="sm:absolute sm:border border-[#b0a17b50] sm:h-[90%] sm:right-[50%] sm:top-0 sm:translate-y-[5%]"></span>
    </div>
  );
};

export default ContactInfo;
