import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import UserCard from "components/user-card";
import { useLocation } from "react-router-dom";

const StorePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const storeId = params.get("storeId");
  const items = params.get("items");
  return (
    <Page className="page">
      <div className="home-header">
        <Suspense>
          <div className="section-container">
            <UserCard />
          </div>
          Gian hàng {storeId} - Bàn số {items}
        </Suspense>
      </div>
    </Page>
  );
};

export default StorePage;
