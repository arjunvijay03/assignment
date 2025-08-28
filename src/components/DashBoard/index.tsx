import { useEffect, useState } from "react";
import DashBoardCard from "../DashBoardCard";
import "./style.css";
import axios from "axios";

export type DashboardDataType = {
  id: number;
  subText: string;
  title: string;
  value: string;
};

const DashBoard = () => {
  const [dashBoardData, setDashBoardData] = useState<DashboardDataType[]>([]);
  useEffect(() => {
    fetchData();
    setInterval(() => {
      fetchData();
    }, 30000);
  }, []);
  const [currentTime, setCurrentTime] = useState(new Date());

  setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  const fetchData = () => {
    axios
      .get("https://1272f4a3-e847-4809-bf79-403baed38856.mock.pstmn.io/data")
      .then((data) => setDashBoardData(data.data.dashboard));
  };

  return (
    <div className="">
      <p className="currentTime">
        {currentTime.toDateString()}
        {"    "}
        {currentTime.toLocaleTimeString()}
      </p>
      <div className="dashBoardContainer">
        {dashBoardData.map((item) => (
          <DashBoardCard data={item} fetchData={fetchData} />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
