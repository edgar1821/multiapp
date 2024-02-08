import { z } from "zod";

const qrUrlSchema = z.object({
  // url: z.string().regex(new RegExp(exp, "g")),
  url: z.string().url({ message: "url no valido" }),
  typePanel: z.string(),
});

export const QrTextSchema = z.object({
  text: z
    .string()
    .min(1, "El codigo debe contener almenos un caracter")
    .max(160, "El codigo debe contener como maximo 160 caracteres"),
  typePanel: z.string(),
});
export default qrUrlSchema;
