import React, { Suspense, useState, useEffect, useRef } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "state";
import Moneybox from "./components/home/money_box";
import Feedbox from "./components/home/feeds_0";
import { useGetAccessToken } from "./components/user-location";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userInfo } = useRecoilValue(userState);
  const userlevel = ["Người mới", "Nông dân cấp I"];
  return (
    <Page className="home">
      <div className="header">
        <Suspense>
          <div className="user-card">
            <div className="user-info">
              <div className="avatar">
                <img src={userInfo.avatar} alt="Avatar"></img>
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
            </div>
          </div>
        </Suspense>
      </div>
      <div className="main-body">
        <Suspense>
          <div className="white-card">
            <Moneybox />
          </div>
          <Feedbox />
        </Suspense>
      </div>
    </Page>
  );
};

export default HomePage;
