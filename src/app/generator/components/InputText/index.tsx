import { forwardRef, InputHTMLAttributes, Ref } from "react";
import { FieldErrors } from "react-hook-form";
import { QrUrlType } from "../../Schemas/qrUrlSchema";
// import { FieldError } from "react-hook-form";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder: string;
  name: string;
  // errors?: FieldErrors<QrUrlType> | any;
}

// eslint-disable-next-line react/display-name
// const InputText = forwardRef(
//   (props: InputProps, ref: Ref<HTMLInputElement>) => {
//     const { placeholder, name, errors, ...rest } = props;

//     return (
//       <div className="flex flex-col">
//         <label className="font-primary text-xs text-generator-primary">
//           {placeholder}
//         </label>
//         <input
//           {...rest}
//           ref={ref}
//           className={`
//           h-8
//           w-full
//           rounded-md
//           border-2
//           border-generator-primary
//           px-2
//           pr-2
//            text-xs
//           text-generator-primary`}
//         />
//         {errors[name] && (
//           <span className="text-red-600">{errors[name].message}</span>
//         )}
//       </div>
//     );
//   },
// );
function InputText({
  placeholder,
  name,
  // errors,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="font-primary text-xs text-generator-primary">
        {placeholder}
      </label>
      <input
        {...rest}
        className={`
          h-8 
          w-full 
          rounded-md
          border-2 
          border-generator-primary
          px-2
          pr-2
           text-xs
          text-generator-primary`}
      />
      {/* {errors[name] && (
        <span className="text-red-600">{errors[name].message}</span>
      )} */}
    </div>
  );
}

export default InputText;
