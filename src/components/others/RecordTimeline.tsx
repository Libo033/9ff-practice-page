import { ArrowDropDown } from "@mui/icons-material";
import React from "react";
import TimelineCard from "../cards/TimelineCard";
import { TimelineCardProps } from "@/Libs/interfaces";

const records: TimelineCardProps[] = [
  {
    year: 2004,
    car: "9FF 9F-T6",
    description: " Fastest Porsche in Nardo - 372 km/h",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722265009/08-9ff-practice-page/mqyuho1lo0nrzgrky8qk.jpg",
  },
  {
    year: 2005,
    car: "9FF V400",
    description: "Fastest road approved vehicle in the world - 388 km/h",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722275771/08-9ff-practice-page/qkuuamqmib4mcam9hzns.jpg",
  },
  {
    year: 2006,
    car: "9FF TRC-85",
    description: "Fastest street-legal convertible in the world - 380 km/h",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722275895/08-9ff-practice-page/j4opwnyaicrlucnizrxl.jpg",
  },
  {
    year: 2007,
    car: "9FF CT 78",
    description: "Fastest alternative fuel vehicle in the world - 336.2 km/h",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722275963/08-9ff-practice-page/webzxglfl81byknc2qtl.jpg",
  },
  {
    year: 2008,
    car: "9FF GT9",
    description: "Fastest road approved vehicle in the world - 409 km/h",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722276040/08-9ff-practice-page/mridlhtq2od2nazma5kt.webp",
  },
  {
    year: 2009,
    car: "9FF GT 63",
    description: "Fastest alternative fuel vehicle in the world - 347 km/h",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722276315/08-9ff-practice-page/njh0d3pelibcuidomwhy.jpg",
  },
  {
    year: 2011,
    car: "9FF GTurbo900",
    description: "Fastest alternative fuel vehicle in the world - 386 km/h",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722276462/08-9ff-practice-page/ybdwdkqolbmde7omnbph.jpg",
  },
  {
    year: 2012,
    car: "9FF G-Tronic",
    description: "Stretching record in Oschersleben",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722276514/08-9ff-practice-page/uomhzvfoxuchn5hmji12.png",
  },
  {
    year: 2013,
    car: "9FF G-Tronic",
    description: "Acceleration from 0 to 300 km/h in 13 seconds",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722276519/08-9ff-practice-page/jabc9zfbido5pd2qb9je.jpg",
  },
  {
    year: 2018,
    car: "9FF 991",
    description: "Fastest road approved 991 from 0 to 300 km/h in 13.1 seconds",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722276592/08-9ff-practice-page/vwiyqcu3zoyawvmrhxil.jpg",
  },
  {
    year: 2019,
    car: "",
    description: "Fastest Zuffenhausen from 200 to 300 km/h in 4.08 seconds",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722276726/08-9ff-practice-page/eqyyyildupnzwcwacers.jpg",
  },
  {
    year: 2020,
    car: "9FF 997",
    description: "Fastest 997 on half a mile",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722276618/08-9ff-practice-page/dhb0iohef9anxaas0fdx.jpg",
  },
];

const RecordTimeline = () => {
  return (
    <div className="pt-2 px-4 md:px-8 lg:px-32 mb-8">
      <div className="relative w-full flex flex-col items-center">
        <div className="z-10 bg-white py-2 px-6 rounded-lg shadow-md">
          <p className="text-center text-2xl font-semibold underline decoration-[#b0a17b] text-black">
            Records through the time
          </p>
        </div>
        {records.map((rec) => (
          <TimelineCard key={rec.image} {...rec} />
        ))}
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
