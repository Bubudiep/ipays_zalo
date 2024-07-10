import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as icon from "@fortawesome/free-solid-svg-icons";
type botItemType = {
  icon: JSX.Element;
  name: string;
  link: string;
};
const botItems: botItemType[] = [
  {
    icon: <FontAwesomeIcon icon={icon.faHouse} />,
    name: "Trang chủ",
    link: "/home/",
  },
  {
    icon: <FontAwesomeIcon icon={icon.faStore} />,
    name: "Gian hàng",
    link: "/store/",
  },
  {
    icon: <FontAwesomeIcon icon={icon.faChartSimple} />,
    name: "Báo cáo",
    link: "/report/",
  },
  {
    icon: <FontAwesomeIcon icon={icon.faUser} />,
    name: "Tài khoản",
    link: "/user/",
  },
];
const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <Page className="main-app">
      <div className="home-body">
        <Outlet />
      </div>
      <div className="home-menu">
        {botItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.link + location.search}
            className={
              "menu-item " + (location.pathname === item.link ? "active" : "")
            }
          >
            <button>
              {item.icon}
              {item.name}
            </button>
          </Link>
        ))}
      </div>
    </Page>
  );
};

export default HomePage;
