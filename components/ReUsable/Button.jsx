import React from "react";
import classNames from "classnames";

const Button = ({ href, className, children }) => {
  return (
    <a
    href={href}
    className={
      classNames(
        "px-4 p-3 flex text-white justify-center items-center cursor-pointer rounded-[8px] bg-[#5900D9]",
        className
      )
    }
  >
    {children}
    </a>
  );
};

export default Button;
