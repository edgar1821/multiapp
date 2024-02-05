import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
}
function Button({ children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className="rounded-md bg-generator-primary p-2 font-primary text-xs text-generator-white-100"
    >
      {children}
    </button>
  );
}

export default Button;
