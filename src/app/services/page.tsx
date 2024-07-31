import React from "react";
import ContactCard from "@/components/cards/ContactCard";
import MainServiceCard from "@/components/cards/MainServiceCard";
import { MainServicesCard } from "@/Libs/interfaces";

const services: MainServicesCard[] = [
  {
    id: 1,
    title: "INDIVIDUAL VEHICLE TUNING",
    info: "9FF stands for performance increases, vehicle conversions, vehicle optimizations, engine and transmission conversions according to individual customer requirements. Thanks to 9FF's many years of experience as a sports car tuner in the high-performance sector, we would be happy to advise you and tailor the individual components of your 9FF vehicle to you. If you wish, we will make your sports car unique from the outside and inside.",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722361725/08-9ff-practice-page/qs8extyk6x0otzwwapiy.jpg",
    button: "we advise you",
  },
  {
    id: 2,
    title: "9FF TUNING PARTS",
    info: "The tuning parts from 9FF are unparalleled on the market. Because we pay attention to performance at 9FF, all auto parts that we offer are resilient, of high quality and real special features.\n\nWe are currently building up 9FF parts sales through our shop to enable you to buy comfortably. Have a look.",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722361713/08-9ff-practice-page/bgtkjpecuxrmxdmtm8dp.jpg",
    button: "9FF shop online",
  },
  {
    id: 3,
    title: "WORKSHOP & SERVICE",
    info: "9FF not only refines your vehicle, but of course also conscientiously carries out its care, maintenance and repair, including acceptance by officially certified test institutions.\n\nOf course, this applies not only to vehicles from 9FF, but of course also to all series vehicles within our brand focus.",
    image:
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1722361709/08-9ff-practice-page/akl0mjswosiodafptois.jpg",
    button: "contact us",
  },
];

const Services = () => {
  return (
    <main className="pt-[91px] max-w-screen-2xl m-auto">
      <div className="px-4 md:px-8 lg:px-32">
        <p className="bg-white rounded-lg shadow-lg mt-4 py-4 text-2xl text-center font-semibold border  phare-service">
          SERVICES FOR OUR CUSTOMERS
        </p>
      </div>
      <div className="px-4 pt-8 md:px-8 lg:px-32">
        <div className="bg-white p-5 border-2 rounded">
          <p className="pb-6 text-center text-xl font-medium">WHAT 9FF DOES</p>
          <p className="text-pretty text-justify">
            We are proud that 9FF is one of the smaller German vehicle
            manufacturers approved by the Federal Motor Transport Authority. We
            don't build vehicles in series. The individual customer request is
            always in the foreground for us. We refine your sports car according
            to your individual ideas or you choose one of ours 9FF Supercars.
            <br />
            It is our many satisfied customers from home and abroad, who have
            made us a little bigger at 9FF in the past 15 years - with all
            modesty - and continuously better because of their high standards.
            <br />
            <br />
            <i className="text-lg text-[#b0a17b]">
              Let yourself be inspired by our services.
            </i>
          </p>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-6 pt-8 md:px-8 lg:px-32">
        {services.map((s) => (
          <MainServiceCard key={s.image} {...s} />
        ))}
      </div>
      <ContactCard />
    </main>
  );
};

export default Services;
