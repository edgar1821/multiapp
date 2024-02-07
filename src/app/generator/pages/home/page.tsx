/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Tabs, TabItem } from "flowbite-react";

import Layout from "../../components/Layout";

import ThemeTab from "./themeTab";
import QRGenerator from "../../Containers/QRGenerator";
// panels
import UrlPanel from "../../Containers/urlPanel";

function index() {
  return (
    <Layout>
      <>
        <div className=" flex w-full p-4">
          <div className="w-1/2">
            <Tabs theme={ThemeTab} style="default">
              <TabItem active title="Url">
                <UrlPanel />
              </TabItem>
              <TabItem title="Whatsapp">Edgar</TabItem>
              <TabItem title="vcard">Gamarra</TabItem>
            </Tabs>
          </div>

          <QRGenerator />
        </div>
      </>
    </Layout>
  );
}

export default index;
