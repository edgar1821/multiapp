import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { QrWhatsapp, QrTextPanel, Option } from "../../types";
import { QrWhatsappSchema } from "../../Schemas";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import useStore from "../../store";
import Select from "../../components/Select";
import Countries from "../../data/countries.json";
import TextArea from "../../components/TextArea";

function QRWhatsappPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QrWhatsapp>({
    resolver: zodResolver(QrWhatsappSchema),
  });
  const saveQrPanel = useStore((state) => state.saveQrPanel);

  function transform(data: Array<any>): Array<Option> {
    let result: Array<Option> = Countries.map((item) => {
      const optionItem: Option = {
        text: item.country,
        value: item.prefix,
        selected: false,
      };
      return optionItem;
    });
    return result;
  }
  //QrTextPanel
  function save(data: QrWhatsapp) {
    console.log(data);
    // saveQrPanel(data);
  }

  return (
    <div className="flex flex-col">
      <form action="" onSubmit={handleSubmit(save)}>
        <Select
          register={register}
          name="prefix"
          label="Prefijo del pais"
          options={transform(Countries)!}
        />
        <InputText
          label="Numero"
          name="phoneNumber"
          register={register}
          errors={errors}
        />
        <TextArea
          label="Mensaje"
          name="textMessage"
          rows={5}
          register={register}
          errors={errors}
        />
        <Button type="submit">Generar</Button>
      </form>
    </div>
  );
}

export default QRWhatsappPanel;
