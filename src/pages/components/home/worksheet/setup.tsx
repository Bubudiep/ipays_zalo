import React, { useState } from "react";
import CountUp from 'react-countup';
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
    <div className="user_configuration">
      <div className="preview_container">
        <div className="items">
          <div className="icon"><FontAwesomeIcon icon={icon.faRepeat} /></div>
          <div className="txt">Đổi ca</div>
        </div>
        <div className="items">
          <div className="icon"><FontAwesomeIcon icon={icon.faPlus} /></div>
          <div className="txt">Tăng ca</div>
          <input type="number" placeholder="3" value={3}/> giờ
        </div>
      </div>
      <div className="view_more"><FontAwesomeIcon icon={icon.faSliders} /></div>
    </div>
  );
};

export default UserSumary;
