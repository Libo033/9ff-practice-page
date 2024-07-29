import { ArrowDownward, ArrowDropDown } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import TimelineCard from "../cards/TimelineCard";

const RecordTimeline = () => {
  return (
    <div className="pt-2 px-4 md:px-8 lg:px-32 mb-8">
      <div className="relative w-full flex flex-col items-center">
        <div className="z-10 bg-white py-2 px-6 rounded-lg shadow-md">
          <p className="text-center text-2xl font-semibold underline decoration-[#b0a17b] text-black">
            Records through the time
          </p>
        </div>
        <TimelineCard />
        <ArrowDropDown
          className="text-[#b0a17b] translate-y-[50%]"
          sx={{ fontSize: "60px" }}
        />
        <span className="absolute Z-0 left-[50%] border-4 border-[#b0a17b] h-full translate-x-[-50%]"></span>
      </div>
    </div>
  );
};

export default RecordTimeline;
