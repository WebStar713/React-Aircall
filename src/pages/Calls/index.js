import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArchive } from "react-icons/fi";

import { getActivities, patchCallData, resetCallData } from "../../apis";
import { CallDateTitle, CallList, Loading } from "../../components";

import "./styles.scss";

const Calls = ({ selectedTab }) => {
  const navigate = useNavigate();

  const [activatedCalls, setActivatedCalls] = useState({});
  const [archivedCalls, setArchivedCalls] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCalls, setSelectedCalls] = useState({});

  const fetchActivities = async () => {
    setLoading(true);
    const result = await getActivities();
    setActivatedCalls(result.activatedCalls);
    setArchivedCalls(result.archivedCalls);
    setLoading(false);
  };

  const handleAllCalls = () => {
    if (selectedTab === "archived") {
      handleActiveAll();
    } else {
      handleArchiveAll();
    }
  };

  const handleArchiveAll = async () => {
    const allCalls = [];
    if (Object.keys(activatedCalls).length > 0) {
      setLoading(true);
      for (let key in activatedCalls) {
        let value = activatedCalls[key];
        allCalls.push(...value);
      }

      for (let call of allCalls) {
        await patchCallData(call.id, true);
      }
      await fetchActivities();
      setLoading(false);
    }
  };

  const handleActiveAll = async () => {
    setLoading(true);
    await resetCallData();
    await fetchActivities();
    setLoading(false);
  };

  useEffect(() => {
    if (selectedTab === "archived") {
      setSelectedCalls(archivedCalls);
    } else {
      setSelectedCalls(activatedCalls);
    }
  }, [selectedTab, archivedCalls, activatedCalls]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const renderItems = (key, value) => {
    return (
      <>
        <CallDateTitle title={key} />
        {value.length > 0 &&
          value.map((list, index) => (
            <CallList
              key={index}
              data={list}
              handleChange={() => navigate(`/calls/${list.id}`)}
            />
          ))}
      </>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="archive-all" onClick={handleAllCalls}>
        <FiArchive className="icon" />
        {selectedTab === "archived"
          ? "Activate all calls"
          : "Archieve all calls"}
      </div>
      {Object.keys(selectedCalls).length > 0 &&
        Object.entries(selectedCalls).map(([key, value]) => (
          <div key={key}>{renderItems(key, value)}</div>
        ))}
    </>
  );
};

export default Calls;
