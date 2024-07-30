import React, { useState } from "react";
import CountUp from "react-countup";

const feedList = [
  {
    id: 0,
    name: "Ngày công",
    data: 10,
    unit: "ngày",
    data2: "80",
    unit2: "tiếng",
  },
  {
    id: 1,
    name: "Giờ tăng ca",
    data: 9,
    unit: "tiếng",
    data2: "3",
    unit2: "tiếng (200%)",
  },
  {
    id: 2,
    name: "Đi làm ngày nghỉ",
    data: 1,
    unit: "ngày",
    data2: "2",
    unit2: "tiếng",
  },
];
const UserSumary = () => {
  return (
    <div className="user_dashboard">
      {feedList.map((val, index) => {
        return (
          <div className="items" key={index}>
            <div className="data">
              <div className="value">
                <CountUp
                  duration={0.5}
                  decimals={0}
                  separator=" "
                  delay={0}
                  end={val.data}
                />
              </div>
            </div>
            <div className="title">{val.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default UserSumary;
