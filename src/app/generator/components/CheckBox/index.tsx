/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes, Ref } from "react";
import { FieldErrors } from "react-hook-form";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  name: string;
  register: any;
  errors?: FieldErrors | any;
}

const CheckBox = forwardRef(
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
      <div className="flex flex-col">
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            className={`
          h-4 
          w-4 
          rounded 
          border-gray-300 
          bg-gray-100 
        text-generator-primary
        focus:border-generator-primary 
        focus:ring-2 
        focus:ring-generator-primary 
        dark:border-gray-600
         dark:bg-gray-700
          dark:ring-offset-gray-800
          dark:focus:ring-blue-600`}
            ref={ref}
            {...rest}
            {...register(name)}
          />
          <label
            htmlFor={name}
            className="ms-2 font-primary  text-xs font-medium text-generator-primary"
          >
            {label}
          </label>
        </div>
        {errors[name] && (
          <span className="text-red-600">{errors[name].message}</span>
        )}
      </div>
    );
  },
);

export default CheckBox;
