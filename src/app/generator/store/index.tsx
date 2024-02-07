"use client";
import { create } from "zustand";
import { QrUrlPanel } from "../types";

interface QRStateInterface {
  qr: QrUrlPanel | null;
  saveQrPanel: (data: QrUrlPanel) => void;
}

let defaultValue: QrUrlPanel = {
  url: "http://localhost:3000/generator/pages/home",
  typePanel: "url",
};
export const useStore = create<QRStateInterface>()((set) => ({
  qr: defaultValue,
  saveQrPanel: (by) =>
    set((state) => {
      console.log(by);
      return { ...state, qr: by };
    }),
}));

export default useStore;
