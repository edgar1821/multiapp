import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
  color?: "primary" | "red";
}
function Button({ children, color = "primary", ...rest }: Props) {
  const objtheme = {
    primary: "bg-generator-primary",
    red: "bg-red-600",
  };
  return (
    <button
      {...rest}
      className={`
      rounded-md 
      ${objtheme[color]}
      pb-2
      pl-3
      pr-3
      pt-2
      font-primary 
      text-xs
      text-generator-white-100
      disabled:opacity-75`}
    >
      {children}
    </button>
  );
}

export default Button;
