import React from "react";
import {
  BsFillTelephoneXFill,
  BsVoicemail,
  BsFillTelephoneInboundFill,
} from "react-icons/bs";

import "./styles.scss";

const CallIcon = ({ callType }) => {
  switch (callType) {
    case "answered":
      return <BsFillTelephoneInboundFill className="inbound-call" />;
    case "missed":
      return <BsFillTelephoneXFill className="missed-call" />;
    case "voicemail":
      return <BsVoicemail className="outbound-call " />;
    default:
      return null;
  }
};

export default CallIcon;
