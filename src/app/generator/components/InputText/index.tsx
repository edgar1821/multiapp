/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes, Ref, useMemo } from "react";
import { FieldErrors } from "react-hook-form";
// import { QrUrlPanel } from "../../types";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  name: string;
  register: any;
  errors?: FieldErrors | any;
}

const InputText = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const {
      label,
      name,
      register,
      errors,
      type = "text",
      onChange,
      ...rest
    } = props;

    return (
      <div className="mb-2 flex flex-col">
        <label
          htmlFor={name}
          className="font-primary text-xs text-generator-primary"
        >
          {label}
        </label>
        <input
          {...rest}
          id={name}
          ref={ref}
          type={type}
          {...register(name)}
          className={`
            h-8
            w-full 
            rounded-md
            border-2
            border-generator-primary  
            px-2
            pr-2 
          font-primary
          text-xs
          text-generator-primary
          focus:border-generator-primary
          focus:ring-generator-primary`}
          onChange={onChange}
        />

        {errors[name] && (
          <span className="text-red-600">{errors[name].message}</span>
        )}
      </div>
    );
  },
);

export default InputText;
