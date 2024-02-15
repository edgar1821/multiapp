import { z } from "zod";

const qrUrlSchema = z.object({
  url: z.string().url({ message: "url no valido" }),
});

export const QrTextSchema = z.object({
  text: z
    .string()
    .min(1, "El codigo debe contener almenos un caracter")
    .max(160, "El codigo debe contener como maximo 160 caracteres"),
});

export const QrWhatsappSchema = z.object({
  prefix: z.string(),
  number: z.string(),
  message: z.string(),
});
export default qrUrlSchema;
