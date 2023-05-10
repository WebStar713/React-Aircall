import React from "react";
import cx from "classnames";
import { BsThreeDotsVertical } from "react-icons/bs";

import "./styles.scss";

const HeaderTab = ({ data, selectedTab, setSelectedTab }) => {
  return (
    <>
      <button
        className={cx("tab-btn", { active: data.key === selectedTab })}
        onClick={() => setSelectedTab(data.key)}
      >
        {data.name}
      </button>
      <BsThreeDotsVertical className="more-icon" />
    </>
  );
};

export default HeaderTab;
