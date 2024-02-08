/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Tabs, TabItem } from "flowbite-react";

import Layout from "../../components/Layout";

import ThemeTab from "./themeTab";
import QRGenerator from "../../Containers/QRGenerator";
// panels
import UrlPanel from "../../Containers/UrlPanel";
import QRTextPanel from "../../Containers/QRText";

function index() {
  return (
    <Layout>
      <>
        <div className="flex w-full flex-col p-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <Tabs theme={ThemeTab} style="default">
              <TabItem active title="Url">
                <UrlPanel />
              </TabItem>
              <TabItem title="Texto">
                <QRTextPanel />
              </TabItem>
              <TabItem title="Whatsapp">Gamarra</TabItem>
            </Tabs>
          </div>
          <div className="w-full md:hidden">add</div>

          <QRGenerator />
        </div>
      </>
    </Layout>
  );
}

export default index;
