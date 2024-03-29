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
  phoneNumber: z.string().regex(/^\d+$/, {
    message: "Solo debes ingresar numeros",
  }),
  message: z.string(),
});

export const QrSmsSchema = z.object({
  phoneNumber: z.string().regex(/^\d+$/, {
    message: "Solo debes ingresar numeros",
  }),
  message: z.string(),
});

const regexGeoloc = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,15}/g;

export const QrGeolocSchema = z.object({
  lat: z.string().regex(regexGeoloc, {
    message: "la latitud no es valida",
  }),
  long: z.string().regex(regexGeoloc, {
    message: "la longitud no es valida",
  }),
});

export const QrWifiSchema = z.object({
  ssid: z.string(),
  password: z.string(),
  securityType: z.string(),
  hidden: z.boolean(),
});
export default qrUrlSchema;

// z.coerce
//     .number() // Force it to be a number
//     .int() // Make sure it's an integer
//     .gte(10000) // Greater than or equal to the smallest 5 digit int
//     .lte(99999),
