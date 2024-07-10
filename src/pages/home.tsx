import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import UserCard from "components/user-card";
import { useLocation } from "react-router-dom";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Home check: ", location);
  return (
    <Page className="page">
      <div className="home-header">
        <Suspense>
          <div className="section-container">
            <UserCard />
          </div>
        </Suspense>
      </div>
    </Page>
  );
};

export default HomePage;
