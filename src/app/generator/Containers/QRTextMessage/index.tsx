import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { QrSMS } from "../../types";
import { QrSmsSchema, QrWhatsappSchema } from "../../Schemas";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import useStore from "../../store";
import TextArea from "../../components/TextArea";

function SmsPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QrSMS>({
    resolver: zodResolver(QrSmsSchema),
  });
  const saveQrPanel = useStore((state) => state.saveQrPanel);

  //QrTextPanel
  function save(data: QrSMS) {
    const smsLink = `SMSTO:${data.phoneNumber}:${data.message}`;
    saveQrPanel({ qrtext: smsLink, typePanel: "whatsapp" });
  }

  return (
    <div className="flex flex-col">
      <form action="" onSubmit={handleSubmit(save)}>
        <InputText
          label="Numero"
          name="phoneNumber"
          register={register}
          errors={errors}
        />
        <TextArea
          label="Mensaje"
          name="message"
          rows={10}
          register={register}
          errors={errors}
        />
        <Button type="submit">Generar</Button>
      </form>
    </div>
  );
}

export default SmsPanel;
