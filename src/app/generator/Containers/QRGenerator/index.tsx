"use client";
import { useRef, useEffect, useState } from "react";
import { FileExtension } from "qr-code-styling";

import QrCode from "./qrStyle";
import useStore from "../../store";
import Button from "../../components/Button";
//https://www.npmjs.com/package/qr-code-styling

function QRGenerator() {
  const qrState = useStore((state) => state.qr);

  const [fileExt, setFileExt] = useState<FileExtension>("png");
  const ref = useRef(null);
  useEffect(() => QrCode.append(ref.current!), []);

  useEffect(() => {
    QrCode.update({
      data: qrState?.text,
    });
  }, [qrState]);

  const onExtensionChange = (event: any) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    QrCode.download({
      extension: fileExt,
    });
  };
  console.log(qrState);
  return (
    <div className="flex w-1/2 items-center p-3 ">
      <div ref={ref} />
      <div className="flex flex-col">
        <div className="mb-3">
          <select
            onChange={onExtensionChange}
            className={`
          block 
          w-full 
          rounded-lg 
          border 
          border-gray-300 
          bg-gray-50 
          p-2.5 
          font-primary 
          text-sm
          text-generator-primary
          focus:border-generator-primary
          focus:ring-generator-primary
          dark:border-gray-600 
          dark:bg-gray-700 
          dark:text-white 
          dark:placeholder-gray-400 
          dark:focus:border-blue-500 
          dark:focus:ring-blue-500`}
          >
            <option value="png">png</option>
            <option value="jpeg">jpeg</option>
            <option value="webp">webp</option>
            <option value="svg">svg</option>
          </select>
        </div>
        <Button color="red" onClick={onDownloadClick}>
          Descargar
        </Button>
      </div>
    </div>
  );
}
//focus:border-cyan-500 focus:ring-cyan-500

export default QRGenerator;

// <a href="wifi://password@ssid"> click to connect wifi </a>
//<a href="WIFI:S:ssid;T:WPA;P:password;H:false;"> click to connect wifi </a>
