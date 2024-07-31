import React, { useState } from "react";

import Bangcong from "./worksheet/bangcong";
import Nguonthu from "./nguonthu";
import Nguonchi from "./nguonchi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as icon from "@fortawesome/free-solid-svg-icons";
import moneyDefaultIcon from "/src/img/icon/money-default.png";
import CountUp from "react-countup";

const mydata = [
  {
    id: 0,
    name: "Bảng công",
    icon: "",
    tab: "1",
  },
  {
    id: 1,
    name: "Chi tiết",
    icon: "",
    tab: "2",
  },
  // {
  //   id: 2,
  //   name: `Cài đặt `,
  //   icon: <FontAwesomeIcon icon={icon.faSliders} />,
  //   tab: "3",
  // },
];
const WorksheetBox = () => {
  const [tab, setTab] = useState("1");
  const [active, setActive] = useState(0);
  const onClick = (id) => {
    setActive(id);
  };
  const money = 9150500;
  const today_text = "Đi làm";
  const today_slr = 50000;
  return (
    <div className="user-dashboard">
      {/* <div className="title">Tổng tài sản</div> */}
      <div className={`money ${money > 0 ? "up" : "down"}`}>
        <div className="icon">
          <img src={moneyDefaultIcon} />
        </div>
        <div className="txt">{money.toLocaleString()} VND</div>
        <div className={`xt ${today_slr > 0 ? "up" : "down"}`}>
          {`${today_slr > 0 ? "+" : ""}`} {today_slr.toLocaleString()} vnđ
          {/* <div className="tbox">({today_text})</div> */}
        </div>
      </div>
      <div className="user-options">
        <ul>
          {mydata.map((val, index) => {
            return (
              <li
                key={index}
                onClick={(e) => {
                  onClick(index);
                  setTab(val.tab);
                }}
                className={val.id === active ? "active" : "deactive"}
              >
                <div className="name">{val.name}</div>
              </li>
            );
          })}
        </ul>
        <div className="tab-content">
          {tab === "1" && <Bangcong />}
          {tab === "2" && <Nguonthu />}
          {tab === "3" && <Nguonchi />}
        </div>
      </div>
    </div>
  );
};

export default WorksheetBox;
