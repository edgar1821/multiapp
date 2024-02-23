"use client";
import { create } from "zustand";
import { QrTextPanel } from "../types";

interface QRStateInterface {
  qr: QrTextPanel;
  saveQrPanel: (data: QrTextPanel) => void;
}

let defaultValue: QrTextPanel = {
  qrtext: "Bienvenido a code bear, generador de codigo gratis",
  typePanel: "url",
};
export const useStore = create<QRStateInterface>()((set) => ({
  qr: defaultValue,
  saveQrPanel: (by) =>
    set((state) => {
      return { ...state, qr: by };
    }),
}));

export default useStore;
