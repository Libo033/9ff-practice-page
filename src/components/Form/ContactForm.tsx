import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div className="py-8 px-4 sm:px-20 md:px-32 lg:px-64 xl:px-[27%] 2xl:px-[30%]">
      <form className="relative bg-white py-6 px-6 border-2 rounded flex flex-col ">
        <div className="w-full">
          <p className="text-2xl text-center font-semibold uppercase tracking-widest">
            Contact
          </p>
        </div>
        <div className="pt-10">
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="flex flex-col sm:w-1/2">
              <label className="font-medium pl-px pb-[-6px]" htmlFor="name">
                Name
              </label>
              <input
                className="w-full z-10 bg-transparent border-2 rounded-sm py-2 px-1 outline-none focus:border-[#b0a17b]"
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col sm:w-1/2">
              <label className="font-medium pl-px" htmlFor="email">
                Email
              </label>
              <input
                className="w-full z-10 bg-transparent border-2 rounded-sm py-2 px-1 outline-none focus:border-[#b0a17b]"
                type="text"
                id="email"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="pt-6 flex flex-col">
            <label className="font-medium pl-px pb-[-6px]" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full z-10 bg-transparent border-2 resize-none rounded-sm py-2 px-1 outline-none focus:border-[#b0a17b]"
              name="message"
              id="message"
              placeholder="Describe your request"
              rows={6}
            ></textarea>
          </div>
          <div className="flex justify-center pt-8">
            <button className="border border-[#b0a17b] bg-gray-800 uppercase w-40 py-2 rounded text-white duration-150 hover:bg-slate-100 hover:text-[#b0a17b]">
              SUBMIT
            </button>
          </div>
        </div>
        <Image
          className="absolute w-72 bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] opacity-10"
          src={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1721866590/08-9ff-practice-page/hocnqmykgwyg9xjq6vpb.png"
          }
          alt="9ff logo"
          width={180}
          height={240}
        />
      </form>
    </div>
  );
};

export default ContactForm;
