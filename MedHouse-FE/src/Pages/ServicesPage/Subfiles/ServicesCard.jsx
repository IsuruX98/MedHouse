import "./servicesCard.css"

function ServicesCard({imgSrc, service, details, link}){
    // console.log(imgSrc,service,details,link)
  return (
    <div className="service-card">
        
        <img src={imgSrc} alt="" />
        <h2>{service}</h2>
        <p>{details}</p>
        <a href={link}>Click Me <span className ="material-icons-outlined">arrow_forward</span></a>
    </div>
  )
}

export default ServicesCard
