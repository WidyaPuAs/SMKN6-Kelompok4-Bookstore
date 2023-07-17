import React, {useState} from "react";
import './tab.css'
import Pp from "../assets/assets/pp.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function TabAcc() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Biodata",
      value: "html",
      content: (
        <div className="order">
          <Card className="mt-6 w-[14rem]">
            <CardHeader color="blue-gray" className="relative h-48">
              <img
                src={Pp}
                alt="img-blur-shadow"
                layout="fill"
                className={isHovered ? "hovered" : ""}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <div className="hover:to-bg-black-10 absolute inset-0 h-full w-full hover:bg-gradient-to-t hover:from-black/70 hover:via-black/40" />
              {isHovered && (
                <div className="hover-content absolute bottom-0 left-0 w-full h-20 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white">
                  <button className="hover-button">Ubah</button>
                </div>
              )}
            </CardHeader>
            <CardBody>
              <Typography className="text-[13px] text-gray-500 -mt-2">
                Besar file maxsimum 10mb. Ekstensi file yang diperbolehkan: .jpg
                .jpeg .png
              </Typography>
            </CardBody>
          </Card>
        </div>
      ),
    },
    {
      label: "Alamat",
      value: "react",
      content: (
        <div className="overflow-scroll mx-4">{/* Konten Daftar Alamat */}</div>
      ),
    },
    {
      label: "Keamanan",
      value: "vue",
      content: (
        <div className="overflow-scroll mx-4">{/* Konten Daftar Alamat */}</div>
      ),
    },
    {
      label: "Wishlist",
      value: "angular",
      content: (
        <div className="overflow-scroll mx-4">{/* Konten Daftar Alamat */}</div>
      ),
    },
    {
      label: "Pengaturan",
      value: "svelte",
      content: (
        <div className="overflow-scroll mx-4">{/* Konten Daftar Alamat */}</div>
      ),
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="w-[60rem] rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-dark-cream shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-dark-cream" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, content }) => (
          <TabPanel key={value} value={value}>
            {content}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
