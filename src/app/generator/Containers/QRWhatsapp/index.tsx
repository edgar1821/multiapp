import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  QRWhatsappPanel,
  QrTextPanel,
  SelectOption,
} from "../../types";
import { QrWhatsappSchema } from "../../Schemas";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import useStore from "../../store";
import Select from "../../components/Select";
import Countries from "../../../data/countries";
import TextArea from "../../components/TextArea";

function QRWhatsappPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QRWhatsappPanel>({
    resolver: zodResolver(QrWhatsappSchema),
    defaultValues: { typePanel: "text", text: "" },
  });
  const saveQrPanel = useStore((state) => state.saveQrPanel);

  //QrTextPanel
  function save(data: QRWhatsappPanel) {
    saveQrPanel(data);
  }
  function transform(): SelectOption[] {
    let result: Array<SelectOption> = Countries.map((country) => {
      let option: SelectOption = {
        text: country.name,
        value: country.code,
      };
      return option;
    });
    return result;
  }
  return (
    <div className="flex flex-col">
      <form action="" onSubmit={handleSubmit(save)}>
        <Select
          register={register}
          errors={errors}
          name="countryPrefix"
          label="Prefijo del pais"
          options={transform()!}
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
