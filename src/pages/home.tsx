import React, { Suspense, useState, useEffect, useRef } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "state";
import Moneybox from "./components/home/money_box";
import WorksheetBox from "./components/home/worksheet_box";
import Feedbox from "./components/home/feeds_0";
import UserSumary from "./components/home/user_sumary";
import UserSetup from "./components/home/worksheet/setup";
import { useGetAccessToken } from "./components/user-location";
import defaultAvatar from '/src/img/icon/avatar-default.png';
import sunIcon from '/src/img/icon/cloud.png';
import moonIcon from '/src/img/icon/moon.png';

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDayShift, setIsDayShift] = useState(true);
  const { userInfo } = useRecoilValue(userState);
  const userlevel = ["Người mới", "Nông dân cấp I"];
  const toggleShift = () => {
    setIsDayShift(!isDayShift);
  };
  return (
    <Page className="home">
      <div className="header">
        <Suspense>
          <div className="user-card">
            <div className="user-info">
              <div className="avatar">
                <img src={userInfo.avatar || defaultAvatar} alt="Avatar" />
              </div>
              <div className="information">
                <div className="username">{userInfo.name}</div>
                <div className="userlevel">
                  {userlevel.map((item, idx) => (
                    <div className="box" key={idx}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="userConfiguration">
              <div className="box-content" onClick={toggleShift}>
                <div className="icon">
                  <img src={isDayShift ? sunIcon : moonIcon} alt="Shift Icon" />
                </div>
                <div className={`text ${isDayShift ? "day" : "night"}`}>
                  {isDayShift ? "Ca ngày" : "Ca đêm"}
                </div>
              </div>
            </div>
            </div>
          </div>
        </Suspense>
      </div>
      <div className="main-body">
        <Suspense>
          <UserSumary />
          <UserSetup />
          <div className="white-card">
            <WorksheetBox />
            {/* <Moneybox /> */}
          </div>
          <Feedbox />
        </Suspense>
      </div>
    </Page>
  );
};

export default HomePage;
