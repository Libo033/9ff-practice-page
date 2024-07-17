"use client";
import { ArrowUpward } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React, { useEffect, useState } from "react";

const FloatingButtonTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const translateToTop = () => {
    document.body.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Fab
          sx={{
            position: "fixed",
            right: 16,
            bottom: 16,
            backgroundColor: "#090909",
          }}
          onClick={() => translateToTop()}
        >
          <ArrowUpward sx={{ color: "#b0a17b" }} />
        </Fab>
      )}
    </>
  );
};

export default FloatingButtonTop;
