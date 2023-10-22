import "./services.css";
import ServicesCard from "./Subfiles/ServicesCard";
import NoticeCard from "./Subfiles/NoticeCard";
import serviceData from "./Subfiles/servicesData";
import noticeBoardData from "./Subfiles/noticeBoardData"
import { useState } from "react";

const Services = () => {

  const googleMapSites ={
    main:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.606198624978!2d79.8903395!3d6.8176575999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25acc4a4a86e1%3A0x23e8b8390853ca4f!2sGeneral%20Sir%20John%20Kotelawala%20Defence%20University!5e0!3m2!1sen!2slk!4v1691311569897!5m2!1sen!2slk",
    Restaurants:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7923.228733365364!2d79.8911923264193!3d6.816669428301845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2slk!4v1692008555578!5m2!1sen!2slk",
    Cafe:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7923.228382067749!2d79.8911923258032!3d6.816690679796184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zY2Fmw6g!5e0!3m2!1sen!2slk!4v1692008809800!5m2!1sen!2slk",
    Hospitals:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17835.741552129984!2d79.88242250792354!3d6.818095780449681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospitals!5e0!3m2!1sen!2slk!4v1692010102521!5m2!1sen!2slk",

  }

  const [googleMapLink, SetGoogleMapLink] = useState(googleMapSites["main"])
  
  const serviceList = serviceData.map(card =>
    <ServicesCard
    key={card.id}
    imgSrc={card.imgSrc}
    service={card.service}
    details={card.details}
    link={card.link}
    />
    );

  const noticeList = noticeBoardData.map(card =>
    <NoticeCard
    key={card.id}
    title = {card.title}
    description={card.description}
    link={card.link}
    />
    );


    

  return (
    <div className="services-page-container">
      {/* services section */}
      <h2 className="page-heading">Services</h2>
      <div className="card-container">{serviceList}</div>

      {/* notices section */}
      <h2 className="page-heading">Notice Board</h2>
      <div className="card-container">
        {noticeList}
        <div className="notice-card">
          <h2 style={{color:"#A1C4D4"}}>new notice</h2>
          <div className="box">
          <span className="material-icons-outlined">add</span>
          </div>
        </div>
      </div>
      <div className="googlemap-location">
      <iframe src= {googleMapLink}
              width="80%" 
              height="100%" 
              style={{border:"1px solid  #00487C"}} 
              allowFullScreen=""  
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className="sites">
                <button type="button" onClick={()=>SetGoogleMapLink(googleMapSites["main"])}>University</button>
                <button type="button" onClick={()=>SetGoogleMapLink(googleMapSites["Restaurants"])}>Restaurants</button>
                <button type="button" onClick={()=>SetGoogleMapLink(googleMapSites["Cafe"])}>Cafes</button>
                <button type="button" onClick={()=>SetGoogleMapLink(googleMapSites["Hospitals"])}>Hospitals</button>

              </div>
      </div>

      
      

        

    </div>
  )
}

export default Services
