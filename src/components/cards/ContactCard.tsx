"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ContactCard = () => {
  const r = useRouter();

  return (
    <div className="mt-8 flex flex-col bg-white border-t-2 bg-[#b0a17b60] rounded-t-lg">
      <div className="pt-6 flex flex-col items-center">
        <p className="text">DO YOU HAVE INTEREST ON A 9FF VEHICLE?</p>
        <p className="text-lg font-bold">WE ARE THERE FOR YOU</p>
      </div>
      <div className="flex justify-center my-6">
        <button
          onClick={() => r.push("/contact")}
          className="border border-[#b0a17b] bg-gray-800 uppercase w-3/6 py-2 rounded text-white duration-150 sm:w-4/12 md:w-3/12 lg:w-2/12 hover:bg-slate-100 hover:text-[#b0a17b]"
        >
          contact
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
