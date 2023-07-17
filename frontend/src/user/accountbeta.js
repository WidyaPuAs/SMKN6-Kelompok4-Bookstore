import Bar from "../nav/navbar";
import Tabslide from "./tabslide.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pp from "../assets/assets/pp.png";
import Rewardsilver from "../assets/icons/RewardsSilver.svg";
import Ovo from "../assets/icons/ovo.png";
import Saldo from "../assets/icons/saldo.png";
import Gopay from "../assets/icons/gopay.png";
import { Avatar, Button, Card, CardHeader, Typography } from "@material-tailwind/react";
import TabAcc from "./tab";

function Account() {
  const navigate = useNavigate();

  return (
    <div className="bg-bg_cream w-full h-screen">
      <Bar />
      <div className="w-full p-5 flex flex-row md:flex-col sm:flex-col xs:flex-col">
        <div className="kotak1 flex flex-col basis-2/3 md:w-full md:mb-20 h-[550px] mx-auto  rounded-sm">
          <div className="header w-full h-[160px] flex flex-row rounded-lg bg-white md:bg-transparent">
            <Avatar
              src={Pp}
              className="m-5 p-0.5 justify-center"
              alt="avatar"
              size="xxl"
              withBorder={true}
              color="green"
            />
            <div className="h-full flex flex-col justify-center">
              <div className="mb-3">
                <div className="flex flex-row">
                  <Typography variant="h4">Laluna Delavonte</Typography>
                  <button className="mt-1 bg-gray-600 mx-3 w-12 h-5 text-xs text-white rounded-full">
                    Silver
                  </button>
                </div>
                <p>lalunadelavonte@gmail.com</p>
              </div>
              <div className="flex flex-row -mt-1">
                <Button className="bg-green-400 mr-2 rounded-full" size="sm">
                  Message
                </Button>
                <Button className="bg-green-400 rounded-full" size="sm">
                  Edit Profile
                </Button>
              </div>
            </div>
            <div></div>
          </div>
          <div className="tab w-full h-[29rem] flex flex-row rounded-b-lg -mt-2 px-4 pt-5 bg-white">
            <TabAcc />
          </div>
        </div>
        <div className="kotak2 flex basis-1/4 h-[550px] mx-auto bg-white rounded-lg">
          <Avatar
            src={Pp}
            className="m-5 p-0.5"
            alt="avatar"
            size="xxl"
            withBorder={true}
            color="green"
          />
        </div>
      </div>
    </div>
  );
}

export default Account;