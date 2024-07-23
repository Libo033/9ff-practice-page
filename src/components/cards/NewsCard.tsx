import { NewsCardProps } from "@/Libs/interfaces";
import Image from "next/image";
import React from "react";

// IDEA CARD QUE EN CLICK CAMBIE DE IMAGEN Y APAREZCA EL TEXTO DE INFORMACION.
// O CARD CON IMAGEN QUE CAMBIE EN HOVER CON TODA LA INFO YA EN SU CONTENIDO.
// PENSAR

const NewsCard = ({ image, title, info }: Readonly<NewsCardProps>) => {
  return (
    <article className="mt-2 border-2 rounded md:flex">
      <div className="p-2 h-[270px] flex sm:h-[360px] sm:p-4 md:w-1/2">
        <Image
          className="rounded-sm object-cover"
          src={image[0]}
          alt={title}
          width={1440}
          height={1440}
        />
      </div>
      <div className="md:w-1/2">
        <p className="px-2 font-medium text-lg sm:px-4">{title}</p>
        <p className="px-2 pt-2 text-sm text-pretty sm:px-4">{info}</p>
      </div>
      <div className="px-2 w-full md:hidden">
        <p className="px-2 py-4 text-xs text-center font-light text-[#b0a17b]">
          9FF GERMAN ENGINEERING
        </p>
      </div>
    </article>
  );
};

export default NewsCard;
