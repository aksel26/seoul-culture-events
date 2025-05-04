import { IconArrowUp } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const ToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    console.log(window.scrollY);
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);
  return (
    <button
      className={`fixed bottom-6 right-6 bg-mint-200 text-mint-800 p-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out  ${
        showButton ? "opacity-75 visible" : "opacity-0 invisible"
      }`}
      type="button"
      onClick={scrollToTop}
    >
      <IconArrowUp strokeWidth={1.8} size={20} />
    </button>
  );
};

export default ToTopButton;
