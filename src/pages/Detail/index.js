import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import moment from "moment";

import { getCallData, patchCallData } from "../../apis";
import { CallIcon, Loading } from "../../components";

import "./styles.scss";

const Detail = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [callData, setCallData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchCallData = async () => {
    setLoading(true);
    const result = await getCallData(id);
    setCallData(result);
    setLoading(false);
  };

  const handleChangeData = async () => {
    setLoading(true);
    await patchCallData(id, !callData.is_archived);
    navigate("/");
    setLoading(false);
  };

  useEffect(() => {
    fetchCallData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="call-details">
      <FiChevronLeft className="back" onClick={() => navigate("/")} />
      <div className="title">Details</div>
      {Object.keys(callData).length > 0 && (
        <>
          <div className="row">
            <div className="col-1">From Number :</div>
            <div className="col-2">
              {callData.direction === "inbound" ? callData.from : callData.to}
            </div>
          </div>
          <div className="row">
            <div className="col-1">To Number :</div>
            <div className="col-2">
              {callData.direction === "inbound" ? callData.to : callData.from}
            </div>
          </div>
          <div className="row">
            <div className="col-1">Call Type :</div>
            <div className="col-2">
              <CallIcon callType={callData.call_type} />
            </div>
          </div>
          <div className="row">
            <div className="col-1">Via :</div>
            <div className="col-2">{callData.via}</div>
          </div>
          <div className="row">
            <div className="col-1">Call Date :</div>
            <div className="col-2">
              {moment(callData.create_at).format("lll")}
            </div>
          </div>
          <button className="activeBtn" onClick={handleChangeData}>
            {callData.is_archived ? "Activate" : "Archive"}
          </button>
        </>
      )}
    </div>
  );
};

export default Detail;
