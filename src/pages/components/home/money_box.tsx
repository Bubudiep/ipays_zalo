import React, { useState } from "react";

import Nguonthunhap from "./nguonthunhap";
import Nguonthu from "./nguonthu";
import Nguonchi from "./nguonchi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as icon from "@fortawesome/free-solid-svg-icons";
import moneyDefaultIcon from '/src/img/icon/money-default.png';
import CountUp from 'react-countup';

const mydata = [
  {
    id: 0,
    name: "Nguồn thu nhập",
    tab: "1",
  },
  {
    id: 1,
    name: "Khoản thu",
    tab: "2",
  },
  {
    id: 2,
    name: "Khoản chi",
    tab: "3",
  },
];
const Moneybox = () => {
  const [tab, setTab] = useState("1");
  const [active, setActive] = useState(0);
  const onClick = (id) => {
    setActive(id);
  };
  const money=9150500
  return (
    <div className="user-dashboard">
      {/* <div className="title">Tổng tài sản</div> */}
      <div className={`money ${money > 0 ? "up" : "down"}`}>
        <div className="icon"><img src={moneyDefaultIcon} /></div>
        <div className="txt">{money.toLocaleString()} VND</div>
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
                {val.name}
              </li>
            );
          })}
        </ul>
        <div className="tab-content">
          {tab === "1" && <Nguonthunhap />}
          {tab === "2" && <Nguonthu />}
          {tab === "3" && <Nguonchi />}
        </div>
      </div>
    </div>
  );
};

export default Moneybox;
