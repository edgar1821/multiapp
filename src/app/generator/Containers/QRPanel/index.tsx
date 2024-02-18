"use client";
import { Tabs, TabItem } from "flowbite-react";
import ThemeTab from "./themeTab";
import UrlPanel from "../UrlPanel";
import QRTextPanel from "../QRText";
import WhatsappPanel from "../QRWhatsapp";
import SMSPanel from "../QRTextMessage";
import GeoLocPanel from "../QRGeoloc";
function MainPanel() {
  return (
    <div className="w-full md:w-1/2">
      <Tabs theme={ThemeTab} style="default">
        <TabItem title="Url">
          <UrlPanel />
        </TabItem>
        <TabItem title="Texto">
          <QRTextPanel />
        </TabItem>
        <TabItem title="Whatsapp">
          <WhatsappPanel />
        </TabItem>
        <TabItem title="Sms">
          <SMSPanel />
        </TabItem>
        <TabItem title="Geoloc" active>
          <GeoLocPanel />
        </TabItem>
      </Tabs>
    </div>
  );
}

export default MainPanel;
