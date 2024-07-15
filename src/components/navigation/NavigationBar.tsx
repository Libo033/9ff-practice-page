"use client";
import { Menu } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavigationBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    setToggleDrawer(true);
  };

  const handleCloseDrawer = () => {
    setToggleDrawer(false);
  };

  return (
    <div>
      <nav className="bg-[#ffffff30] shadow-md backdrop-blur-sm w-full fixed flex justify-center items-center">
        <Link href={"/"}>
          <ul className="w-full inline-flex items-center justify-center p-4">
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
        <div onClick={handleOpenDrawer} className="absolute right-6">
          <Menu sx={{ fontSize: "39px" }} />
        </div>
        <Drawer
          anchor="top"
          open={toggleDrawer}
          onClose={handleCloseDrawer}
        ></Drawer>
      </nav>
    </div>
  );
};

export default NavigationBar;
