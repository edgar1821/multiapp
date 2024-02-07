import { z } from "zod";

const qrUrlSchema = z.object({
  // url: z.string().regex(new RegExp(exp, "g")),
  url: z.string().url({ message: "url no valido" }),
  typePanel: z.string(),
});
export default qrUrlSchema;
