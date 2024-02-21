import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Option, QrWifi } from "../../types";
import { QrWifiSchema } from "../../Schemas";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import useStore from "../../store";
import Select from "../../components/Select";
import Checkbox from "../../components/CheckBox";
function WifiPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QrWifi>({
    resolver: zodResolver(QrWifiSchema),
  });

  const saveQrPanel = useStore((state) => state.saveQrPanel);
  const securityType = useMemo(() => {
    const lista: Array<Option> = [
      { text: "WPA", value: "WPA" },
      { text: "WEB", value: "WEB" },
      { text: "Sin contraseña", value: "nopass" },
    ];
    return lista;
  }, []);
  //QrTextPanel
  function save(data: QrWifi) {
    const wifiUri = `WIFI:S:${data.ssid};T:${data.securityType};P:${data.password};H:${data.hidden ? "true" : "false"};`;
    saveQrPanel({ qrtext: wifiUri, typePanel: "whatsapp" });
  }

  return (
    <div className="flex flex-col">
      <form action="" onSubmit={handleSubmit(save)}>
        <InputText
          label="Nombre de la red/ssid"
          name="ssid"
          register={register}
          errors={errors}
        />
        <InputText
          label="Password"
          name="password"
          type="password"
          register={register}
          errors={errors}
        />
        <Select
          name="securityType"
          label="Tipo de seguridad"
          options={securityType}
          register={register}
        />
        <Checkbox
          label="Oculto"
          name="hidden"
          register={register}
          errors={errors}
        />
        <Button type="submit">Generar</Button>
      </form>
    </div>
  );
}

export default WifiPanel;
