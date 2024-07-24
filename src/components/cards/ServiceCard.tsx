"use client";
import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useEffect, useState } from "react";

const ServiceCard = () => {
  const r = useRouter();
  const [arrowBehavior, setArrowBehavior] = useState<string>("0px");
  const servicesRef = useRef<HTMLButtonElement | null>(null);

  const handleToServices = () => {
    r.push("/services");
  };

  useEffect(() => {
    servicesRef.current?.addEventListener("mouseenter", (e) => {
      setArrowBehavior("12px");
    });
    servicesRef.current?.addEventListener("mouseleave", (e) => {
      setArrowBehavior("0px");
    });
  }, []);

  return (
    <div className="pt-10 px-4 md:pt-16 md:px-8 lg:px-32">
      <div className="p-4 border-2 rounded relative flex flex-col overflow-hidden sm:flex-row-reverse lg:max-h-[270px]">
        <div className="pb-6 sm:pb-0 sm:w-5/12 lg:w-5/12 xl:w-4/12">
          <Image
            className="rounded w-full object-cover sm:h-full"
            src={
              "https://res.cloudinary.com/dsuydyqgz/image/upload/v1721847675/08-9ff-practice-page/voqud9c938h2nkggjqlm.jpg"
            }
            alt="services 9ff"
            width={435}
            height={291}
          />
        </div>
        <div className="sm:w-7/12 sm:min-h-full sm:flex sm:flex-col sm:justify-between lg:w-7/12 xl:w-8/12">
          <p className="text-pretty sm:pr-4 sm:text-sm md:text-base lg:text-lg">
            <b>9FF</b> is one of the smaller German vehicle manufacturers
            approved by the Federal Motor Transport Authority.
            <br />
            <br />
            Our services are designed for all sports cars from Stuttgart.
          </p>
          <button
            onClick={handleToServices}
            ref={servicesRef}
            className="w-full pt-6 flex items-center gap-1"
          >
            <p className="text-2xl uppercase md:text-3xl">Services</p>
            <ArrowForward
              className="text-2xl md:text-3xl"
              sx={{
                color: "#b0a17b",
                translate: arrowBehavior,
                transition: "linear 150ms",
              }}
            />
          </button>
        </div>
        <span /* Abajo Derecha pequeña */
          className={`absolute bottom-[-3rem] right-[-3rem] rounded-full bg-[#b0a17b99] z-[-1] min-w-24 min-h-24`}
        ></span>
        <span /* Abajo Derecha grande */
          className={`absolute bottom-[-4.5rem] right-[-4.5rem] rounded-full bg-[#b0a17b99] z-[-1] min-w-40 min-h-40`}
        ></span>
        <span /* Abajo Izq mediana */
          className={`absolute bottom-[-4.5rem] left-[-4.5rem] rounded-full bg-[#b0a17b99] z-[-1] min-w-32 min-h-32`}
        ></span>
        <span /* Abajo Izq pequeña */
          className={`absolute bottom-[-6rem] left-[-6rem] rounded-full bg-[#b0a17b99] z-[-1] min-w-32 min-h-32`}
        ></span>
        <span /* Arriba Izq mediana */
          className={`absolute top-16 left-[-2rem] rounded-full bg-[#b0a17b99] z-[-1] min-w-16 min-h-16`}
        ></span>
        <span /* Arriba Derecha mediana */
          className={`absolute top-[-2rem] right-2 rounded-full bg-[#b0a17b99] z-[-1] min-w-16 min-h-16`}
        ></span>
      </div>
    </div>
  );
};

export default ServiceCard;
