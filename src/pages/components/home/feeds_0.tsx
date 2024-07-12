import React, { useState } from "react";
import NewsFeed from "./feeds_news";
import Following from "./feeds_following";
import FeedsAlert from "./feeds_alert";
const feedList = [
  {
    id: 0,
    name: "Mới đây",
    tab: "1",
  },
  {
    id: 1,
    name: "Theo dõi (0)",
    tab: "2",
  },
  {
    id: 2,
    name: "Thông báo (0)",
    tab: "3",
  },
];
const Feedbox = () => {
  const [tab, setTab] = useState("1");
  const [active, setActive] = useState(0);
  const onClick = (id) => {
    setActive(id);
  };
  return (
    <div className="news-feed">
      <div className="tab-options">
        <ul>
          {feedList.map((val, index) => {
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
      </div>
      {tab === "1" && <NewsFeed />}
      {tab === "2" && <Following />}
      {tab === "3" && <FeedsAlert />}
    </div>
  );
};

export default Feedbox;
