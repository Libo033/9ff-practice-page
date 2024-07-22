"use client";
import { Menu } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavigationDrawer from "./NavigationDrawer";
import { usePathname } from "next/navigation";

const link: string =
  "text-black font-medium text-sm uppercase hover:text-[#b0a17b] ease-in-out duration-200";
const linkActive: string = "text-[#b0a17b] font-medium text-sm uppercase";

const NavigationBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const pathname: string = usePathname();

  const handleOpenDrawer = () => {
    setToggleDrawer(true);
  };

  const handleCloseDrawer = () => {
    setToggleDrawer(false);
  };

  useEffect(() => {
    setToggleDrawer(false);
  }, [pathname]);

  return (
    <div className="bg-[rgb(255,255,255,0.69)] z-50 shadow-md  backdrop-blur-md fixed w-screen h-[91px] flex justify-center">
      <nav className="w-screen flex justify-center items-center lg:max-w-screen-2xl lg:justify-between">
        <Link href={"/"}>
          <ul className="w-full inline-flex items-center justify-center p-4 lg:ml-[21%]">
            <li>
              <Image
                className="p-1 pr-0"
                src={
                  "https://res.cloudinary.com/dsuydyqgz/image/upload/v1720719169/08-9ff-practice-page/dq0vv9y6fmo136vaetx7.png"
                }
                alt="9ff logo"
                width={44}
                height={56}
              />
            </li>
            <li>
              <Image
                className="p-4"
                src={
                  "https://res.cloudinary.com/dsuydyqgz/image/upload/v1720719174/08-9ff-practice-page/mgvj3drclxfl1jw0oukr.png"
                }
                alt="9ff logo"
                width={173}
                height={37}
              />
            </li>
          </ul>
        </Link>
        <ul className="hidden lg:pr-[6%] lg:flex lg:gap-8">
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
        </ul>
        <div onClick={handleOpenDrawer} className="absolute right-6 lg:hidden">
          <Menu sx={{ fontSize: "39px" }} />
        </div>
        <Drawer
          className="lg:hidden"
          anchor="top"
          open={toggleDrawer}
          onClose={handleCloseDrawer}
        >
          <NavigationDrawer onClose={handleCloseDrawer} pathname={pathname} />
        </Drawer>
      </nav>
    </div>
  );
};

export default NavigationBar;
