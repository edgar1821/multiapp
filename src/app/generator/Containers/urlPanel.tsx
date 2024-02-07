import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import QrUrlSchema from "../Schemas/qrUrlSchema";
import { QrUrlPanel } from "../types";

import Button from "../components/Button";
import useStore from "../store";

function UrlPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QrUrlPanel>({
    resolver: zodResolver(QrUrlSchema),
    defaultValues: { typePanel: "url", url: "" },
  });
  const saveQrPanel = useStore((state) => state.saveQrPanel);

  function save(data: QrUrlPanel) {
    // console.log(data);
    saveQrPanel(data);
  }
  return (
    <div className="flex w-full flex-col justify-center">
      <form action="" onSubmit={handleSubmit(save)}>
        <div className="flex flex-col">
          <label
            htmlFor="url"
            className="font-primary text-xs text-generator-primary"
          >
            url
          </label>
          <input
            className={`
                  h-8 
                  w-full 
                  rounded-md
                  border-2 
                  border-generator-primary
                  px-2
                  pr-2
                  text-xs
                  text-generator-primary
                  focus:border-generator-primary
                focus:ring-generator-primary`}
            {...register("url")}
          />
          {errors.url && (
            <span className="text-red-600">{errors.url.message}</span>
          )}
        </div>

        <Button type="submit">Generar</Button>
      </form>
    </div>
  );
}

export default UrlPanel;
