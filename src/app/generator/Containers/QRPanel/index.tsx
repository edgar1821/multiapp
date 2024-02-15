"use client";
import { Tabs, TabItem } from "flowbite-react";
import ThemeTab from "./themeTab";
import UrlPanel from "../UrlPanel";
import QRTextPanel from "../QRText";
function MainPanel() {
  return (
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
  );
}

export default MainPanel;
