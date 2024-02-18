import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { QrGeoloc } from "../../types";
import { QrGeolocSchema } from "../../Schemas";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import useStore from "../../store";

function GeolocPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QrGeoloc>({
    resolver: zodResolver(QrGeolocSchema),
    defaultValues: {
      lat: "12.11163",
      long: "76.94061",
    },
  });
  //-12.089084151935634, -76.97323208846565
  //12.11163° S, 76.94061° W
  const saveQrPanel = useStore((state) => state.saveQrPanel);

  //QrTextPanel
  function save(data: QrGeoloc) {
    const locationUrl = `geo:${data.lat},${data.long}`;

    saveQrPanel({ qrtext: locationUrl, typePanel: "whatsapp" });
  }

  return (
    <div className="flex flex-col">
      <form action="" onSubmit={handleSubmit(save)}>
        <InputText
          label="Latitud"
          name="lat"
          register={register}
          errors={errors}
        />
        <InputText
          label="Longitud"
          name="long"
          register={register}
          errors={errors}
        />
        <Button type="submit">Generar</Button>
      </form>
    </div>
  );
}

export default GeolocPanel;
