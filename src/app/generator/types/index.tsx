// type panel =
export type QrType = "url" | "whatsapp" | "text";

export interface QrTextPanel {
  typePanel: QrType;
  text: string;
}
