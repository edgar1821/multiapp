import { lazy } from "react";
import { Metadata } from "next";

import Layout from "../../components/Layout";

// import MainPanel from "../../Containers/QRPanel";
// import QRGenerator from "../../Containers/QRGenerator";
const MainPanel = lazy(() => import("../../Containers/QRPanel"));
const QRGenerator = lazy(() => import("../../Containers/QRGenerator"));

// panels

export const metadata: Metadata = {
  title: "Generador de qr gratis gratis",
};

function index() {
  return (
    <Layout>
      <div className="flex w-full flex-col p-4 md:flex-row">
        <MainPanel />

        <div className="w-full md:hidden">addss</div>

        <QRGenerator />
      </div>
    </Layout>
  );
}

export default index;
