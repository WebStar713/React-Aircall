import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import moment from "moment";

import CallIcon from "../CallIcon";

import "./styles.scss";

const CallList = ({ data, handleChange }) => {
  const dateTime = moment(data.created_at).format("LT").split(" ");

  return (
    <div className="call-list" onClick={handleChange}>
      <div className="details">
        <CallIcon callType={data.call_type} />
        <div className="call-form">
          <div className="title">
            {data.direction === "inbound" ? data.from : data.to}
          </div>
          <div className="sub-title">tried to call on {data.via}</div>
        </div>
      </div>
      <div className="call-time">
        <BsThreeDotsVertical className="more-icon" />
        <div className="time">{dateTime[0]}</div>
        <div className="ampm">{dateTime[1]}</div>
      </div>
    </div>
  );
};

export default CallList;
