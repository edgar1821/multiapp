import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import QrUrlSchema from "../../Schemas";
import { QrTextPanel } from "../../types";

import Button from "../../components/Button";
import useStore from "../../store";
import InputText from "../../components/InputText";

function UrlPanel() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<QrTextPanel>({
    resolver: zodResolver(QrUrlSchema),
    defaultValues: { typePanel: "url", text: "" },
  });
  const saveQrPanel = useStore((state) => state.saveQrPanel);
  function save(data: QrTextPanel) {
    saveQrPanel(data);
  }
  return (
    <div className="flex w-full flex-col justify-center">
      <form action="" onSubmit={handleSubmit(save)}>
        <InputText
          register={register}
          label="url"
          name="url"
          errors={errors}
        />

        <Button type="submit">Generar</Button>
      </form>
    </div>
  );
}

export default UrlPanel;
