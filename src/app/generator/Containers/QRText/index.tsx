import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { QrTextPanel } from "../../types";
import { QrTextSchema } from "../../Schemas";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import useStore from "../../store";
function QRText() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QrTextPanel>({
    resolver: zodResolver(QrTextSchema),
    defaultValues: { typePanel: "text", text: "" },
  });
  const saveQrPanel = useStore((state) => state.saveQrPanel);

  //QrTextPanel
  function save(data: QrTextPanel) {
    saveQrPanel(data);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(save)}>
        <InputText
          label="Texto"
          name="text"
          register={register}
          errors={errors}
        />

        <Button type="submit">Generar</Button>
      </form>
    </div>
  );
}

export default QRText;
/*

function generateQR(divCanvas, divText, divKey) {
				var type = $("input:radio[name=T]:checked").val();
				var ssid = mecard_escape($("#S").val());
				var key = mecard_escape($("#P").val());

				var url = "WIFI:" +
					"T:" + type + ";" +
					"S:" + ssid + ";" +
					"P:" + key + ";" +
					($("#H").is(":checked") ? "H:true;B:true;" : "") +
					";";

				divCanvas.empty().qrcode(url);
				divText.html('' + $("#S").val() + ' (' + type + ')');

				if($('#PS').is(':checked')) {
					divKey.html('' + key);
				} else {
					divKey.html('&nbsp;');
				}
			}*/
