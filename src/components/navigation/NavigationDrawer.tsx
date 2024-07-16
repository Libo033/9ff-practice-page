"use client";
import { Close } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const link: string = "text-white font-medium text-xl uppercase";
const linkActive: string = "text-[#b0a17b] font-medium text-xl uppercase";

interface NavigationDrawerProps {
  onClose: () => void;
  pathname: string;
}

const NavigationDrawer = ({
  onClose,
  pathname,
}: Readonly<NavigationDrawerProps>) => {
  return (
    <div className="bg-carbon-fiber h-screen w-screen lg:hidden">
      <div className="flex flex-col">
        <div className="py-12 w-full flex justify-center">
          <Close
            onClick={onClose}
            sx={{
              color: "transpartent",
              fontSize: "45px",
              backgroundColor: "#b0a17b",
              borderRadius: "150px",
              padding: "3px",
            }}
          />
        </div>
        <ul className="w-full flex flex-col items-center gap-12 ">
          <li>
            <Link className={pathname === "/" ? linkActive : link} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/services" ? linkActive : link}
              href={"/services"}
            >
              services
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/supercars" ? linkActive : link}
              href={"/supercars"}
            >
              supercars
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/gallery" ? linkActive : link}
              href={"/gallery"}
            >
              gallery
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/about-9ff" ? linkActive : link}
              href={"/about-9ff"}
            >
              about 9ff
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/contact" ? linkActive : link}
              href={"/contact"}
            >
              contact
            </Link>
          </li>
          <li className="absolute bottom-6">
            <Image
              src={
                "https://res.cloudinary.com/dsuydyqgz/image/upload/v1720719169/08-9ff-practice-page/dq0vv9y6fmo136vaetx7.png"
              }
              alt="9ff logo"
              width={44}
              height={56}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationDrawer;
