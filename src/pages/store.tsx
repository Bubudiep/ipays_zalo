import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useLocation } from "react-router-dom";
import { userState } from "state";
import { useRecoilValue } from "recoil";
import { useGetAccessToken } from "./components/user-location";
import UserLocation from "./components/stores/UserLocation";

const StorePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const storeId = params.get("storeId");
  const items = params.get("items");
  const { userInfo } = useRecoilValue(userState);
  const { userData } = useGetAccessToken(600000);
  console.log(userData);
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
                <div className="userlocation">
                  <UserLocation />
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </Page>
  );
};

export default StorePage;
