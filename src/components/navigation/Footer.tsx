import { Email, Facebook, Instagram, ShoppingCart } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900">
      <footer className="flex flex-col items-center">
        <div className="pt-10 flex gap-6 lg:gap-12">
          <ShoppingCart
            className="icon-hover"
            sx={{ color: "white", fontSize: "32px" }}
          />
          <Facebook
            className="icon-hover"
            sx={{ color: "white", fontSize: "32px" }}
          />
          <Instagram
            className="icon-hover"
            sx={{ color: "white", fontSize: "32px" }}
          />
          <Email
            className="icon-hover"
            sx={{ color: "white", fontSize: "32px" }}
          />
        </div>
        <div className="py-10">
          <p className="text-white text-sm font-medium uppercase underline decoration-[#b0a17b] decoration-1 underline-offset-2">
            Visit official 9ff
          </p>
        </div>
        <div className="pb-2">
          <p className="text-[#b0a17b] text-xs font-light uppercase">
            Copyright 2024 - 9FF German Engineering GmbH
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
