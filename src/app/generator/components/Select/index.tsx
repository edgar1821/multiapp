/* eslint-disable react/display-name */
import { forwardRef, SelectHTMLAttributes, Ref } from "react";
import { FieldErrors } from "react-hook-form";
import { Option } from "../../types";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  register: any;
  // errors?: FieldErrors | any;
  options: Array<Option>;
}

const Select = forwardRef(
  (props: SelectProps, ref: Ref<HTMLSelectElement>) => {
    const { label, name, register, ...rest } = props;
    return (
      <div className="mb-2 flex flex-col">
        <select
          className={`
          block 
          w-full 
          rounded-lg 
          border 
          border-gray-300 
          bg-gray-50 
          p-2.5 
          font-primary 
          text-sm
          text-generator-primary
          focus:border-generator-primary
          focus:ring-generator-primary
          dark:border-gray-600 
          dark:bg-gray-700 
          dark:text-white 
          dark:placeholder-gray-400 
          dark:focus:border-blue-500 
          dark:focus:ring-blue-500
          `}
          ref={ref}
          {...rest}
          {...register(name)}
        >
          <option>pais</option>
        </select>
      </div>
    );
  },
);

export default Select;
