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
export interface QrSMS {
  phoneNumber: string;
  message: string;
}

export interface QrGeoloc {
  lat: string;
  long: string;
}
export interface QrWifi {
  ssid: string;
  password?: string;

  securityType: string;
  hidden: boolean;
}
export interface Option {
  text: string;
  value: string;
  selected?: boolean;
}
