import "./noticeCard.css"
import useState from "react";

const NoticeCard = ({title, description, link}) => {

  return (
    <div className="notice-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>{"Open ->"}</a>

    </div>
  )
}

export default NoticeCard