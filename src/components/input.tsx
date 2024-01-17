import React from "react";

type InputProps = {
  label: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col items-start w-full ">
      <label className="pl-8 mb-2 text-sm md:text-base">{label}</label>
      <input
        {...props}
        className="px-8 placeholder:text-[#171F33] text-xs w-full py-4 bg-[#FFEEE5] border active:border-[#99C2C2] active:outline-[#647e7e] focus:outline-[#647e7e] transition-all outline-1 rounded-full"
      />
    </div>
  );
}

export default Input;
