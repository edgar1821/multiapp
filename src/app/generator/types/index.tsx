// type panel =
export type QrType = "url" | "whatsapp" | "text";

export interface QrTextPanel {
  typePanel: QrType;
  qrtext: string;
}

export interface QrUrl {
  url: string;
}

export interface QrText {
  text: string;
}
export interface QrWhatsapp {
  prefix: string;
  phoneNumber: number;
  message: string;
}

export interface Option {
  text: string;
  value: string;
  selected: boolean;
}
