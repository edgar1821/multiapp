"use client";
import { Tabs, TabItem } from "flowbite-react";
import { CiLink, CiMap } from "react-icons/ci";
import { FaWifi, FaWhatsapp, FaSms } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import ThemeTab from "./themeTab";
import UrlPanel from "../UrlPanel";
import QRTextPanel from "../QRText";
import WhatsappPanel from "../QRWhatsapp";
import SMSPanel from "../QRTextMessage";
import GeoLocPanel from "../QRGeoloc";
import WifiPanel from "..//QRWifi";
function MainPanel() {
  return (
    <div className="w-full md:w-1/2">
      <Tabs theme={ThemeTab} style="default">
        <TabItem title="Url" active icon={CiLink}>
          <UrlPanel />
        </TabItem>
        <TabItem title="Texto" icon={IoDocumentText}>
          <QRTextPanel />
        </TabItem>
        <TabItem title="Whatsapp" icon={FaWhatsapp}>
          <WhatsappPanel />
        </TabItem>
        <TabItem title="Sms" icon={FaSms}>
          <SMSPanel />
        </TabItem>
        <TabItem title="Geoloc" icon={CiMap}>
          <GeoLocPanel />
        </TabItem>
        <TabItem title="Wifi" icon={FaWifi}>
          <WifiPanel />
        </TabItem>
      </Tabs>
    </div>
  );
}

export default MainPanel;
