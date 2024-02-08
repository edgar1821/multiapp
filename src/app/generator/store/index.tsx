"use client";
import { create } from "zustand";
import { QrTextPanel } from "../types";

interface QRStateInterface {
  qr: QrTextPanel | null;
  saveQrPanel: (data: QrTextPanel) => void;
}

let defaultValue: QrTextPanel = {
  text: "http://localhost:3000/generator/pages/home",
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
