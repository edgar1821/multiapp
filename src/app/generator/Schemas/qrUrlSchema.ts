import { z } from "zod";

const optionalUrl = z.union([
  z.string().url().nullish(),
  z.literal(""),
]);

export type QrUrlType = {
  url: string;
};
const qrUrlSchema = z.object({
  // url: z.string().regex(new RegExp(exp, "g")),
  url: z.string().url({ message: "url no valido" }),
});
export default qrUrlSchema;
