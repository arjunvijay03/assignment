import type { DashboardDataType } from "../DashBoard";
import "./style.css";
import copyIcon from "../../assets/copy_icon.png";
import shopIcon from "../../assets/shop_icon.png";
import warningIcon from "../../assets/warning_icon.png";
import warningIcon2 from "../../assets/warning_icon_2.png";
import twitterIcon from "../../assets/twitter_icon.png";
import calenderIcon from "../../assets/calender_icon.png";
import tagIcon from "../../assets/tag_icon.png";
import resetIcon from "../../assets/reset_icon.png";

const DashBoardCard = ({
  data,
  fetchData,
}: {
  data: DashboardDataType;
  fetchData: () => void;
}) => {
  const icons = {
    1: { mainIcon: copyIcon, color: "orange", bottomIcon: warningIcon2 },
    2: { mainIcon: shopIcon, color: "green", bottomIcon: calenderIcon },
    3: { mainIcon: warningIcon, color: "red", bottomIcon: tagIcon },
    4: { mainIcon: twitterIcon, color: "#7db6e4f7", bottomIcon: resetIcon },
  };
  return (
    <>
      <div className="cardContainer">
        <div
          className="iconContainer"
          style={{ backgroundColor: icons[data.id].color }}
        >
          <img src={icons[data.id].mainIcon} className="mainIcon" alt="" />
        </div>
        <div className="topSection">
          <h4 className="title">{data.title}</h4>
          <p className="value">{data.value}</p>
        </div>
        <div className="bottomSection">
          <img src={icons[data.id].bottomIcon} alt="" className="bottomIcon" />
          <p className="subText" style={{ color: data.id === 1 ? "red" : "" }}>
            {data.subText}
          </p>
          <img
            src={resetIcon}
            alt=""
            className="bottomIcon refreshButton"
            onClick={fetchData}
          />
        </div>
      </div>
    </>
  );
};
export default DashBoardCard;
