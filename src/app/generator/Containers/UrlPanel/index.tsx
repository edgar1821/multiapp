import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import QrUrlSchema from "../../Schemas";
import { QrTextPanel, QrUrl } from "../../types";

import Button from "../../components/Button";
import useStore from "../../store";
import InputText from "../../components/InputText";

function UrlPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QrUrl>({
    resolver: zodResolver(QrUrlSchema),
  });
  const saveQrPanel = useStore((state) => state.saveQrPanel);
  function save(data: QrUrl) {
    const qrparameter: QrTextPanel = {
      qrtext: data.url,
      typePanel: "url",
    };
    saveQrPanel(qrparameter);
  }
  console.log("error", errors);
  return (
    <div className="flex w-full flex-col justify-center">
      <form action="" onSubmit={handleSubmit(save)}>
        <InputText
          register={register}
          label="Url"
          name="url"
          errors={errors}
        />
        <Button type="submit">Generar</Button>
      </form>
    </div>
  );
}

export default UrlPanel;
