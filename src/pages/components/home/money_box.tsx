import React, { useState } from "react";

import Nguonthunhap from "./nguonthunhap";
import Nguonthu from "./nguonthu";
import Nguonchi from "./nguonchi";

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
  return (
    <div className="user-dashboard">
      {/* <div className="title">Tổng tài sản</div> */}
      <div className="money">{(9150500).toLocaleString()}</div>
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
