import React, { useState } from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";

const userConfig = {
  shiftType: 2,
  workShift: 1,
  overTime: 10,
  dateType: 2,
};
const UserSumary = () => {
  return (
    <div className="flex-cl gap5">
      <div className="user_configuration">
        <div className="preview_container">
          <div className="items">
            <div className="txt">Ca ngày</div>
          </div>
          <div className="items">
            <div className="txt">Bảng lương</div>
          </div>
          <div className="items">
            <div className="txt">Cài đặt</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSumary;
