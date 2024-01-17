import React from "react";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="rounded-full bg-[#DB7D54] w-full px-8 py-4 font-medium text-white"
    ></button>
  );
}

export default Button;
