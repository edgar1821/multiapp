/* eslint-disable react/display-name */
import { forwardRef, TextareaHTMLAttributes, Ref } from "react";
import { FieldErrors } from "react-hook-form";
// import { QrUrlPanel } from "../../types";

export interface InputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label: string;
  name: string;
  register: any;
  errors?: FieldErrors | any;
}

const TextArea = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const { label, name, register, errors, ...rest } = props;

    return (
      <div className="mb-2 flex h-auto flex-col">
        <label
          htmlFor={name}
          className="font-primary text-xs text-generator-primary"
        >
          {label}
        </label>
        <textarea
          {...rest}
          id={name}
          ref={ref}
          {...register(name)}
          className={`
          h-auto
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
        ></textarea>
        {errors[name] && (
          <span className="text-red-600">{errors[name].message}</span>
        )}
      </div>
    );
  },
);

export default TextArea;
