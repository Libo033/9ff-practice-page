"use client";
import { ArrowForward } from "@mui/icons-material";
import React, { useRef, useEffect, useState } from "react";

const ServiceCard = () => {
  const [arrowBehavior, setArrowBehavior] = useState<string>("0px");
  const servicesRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    servicesRef.current?.addEventListener("mouseenter", (e) => {
      setArrowBehavior("12px");
    });
    servicesRef.current?.addEventListener("mouseleave", (e) => {
      setArrowBehavior("0px");
    });
  }, []);

  return (
    <div className="pt-10 px-4 md:px-8 lg:px-32">
      <div className="p-4 border-2 rounded">
        <p>
          <b>9FF</b> is one of the smaller German vehicle manufacturers approved
          by the Federal Motor Transport Authority.
          <br />
          <br />
          Our services are designed for all sports cars from Stuttgart.
        </p>
        <button ref={servicesRef} className="pt-6 flex items-center gap-1">
          <p className="text-2xl uppercase">Services</p>
          <ArrowForward
            sx={{
              fontSize: "1.5rem",
              color: "#b0a17b",
              translate: arrowBehavior,
              transition: "linear 150ms",
            }}
          />
        </button>
        <span className="rounded-full bg-[#b0a17b] min-w-6 min-h-6"></span>
      </div>
    </div>
  );
};

export default ServiceCard;
