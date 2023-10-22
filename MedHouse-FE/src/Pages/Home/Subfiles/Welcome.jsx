
import "../home.css"
import backgroundVector from "../../../assets/welcome_back_vector1.svg";
import imageDoctor from "../../../assets/welcome_doctor.svg"

const Welcome = () => {
  return (
    <div className="welcome sections">
      <img className="back-img" src={backgroundVector} alt="background-vector" />
      <div className="main-container">
        <div className="left-container">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper odio vitae enim elementum posuere. Nam tellus lacus, sagittis vitae tortor id, consequat mollis eros. Vestibulum sagittis pharetra nisi, eu ultricies nisl ornare sit amet. Aliquam vulputate placerat magna, eu volutpat lectus eleifend eu. Praesent sem lacus, venenatis sed dapibus.</p>
          <div>
            <button>Read More</button>
            <a href="">Contact Us <span className ="material-icons-outlined">arrow_forward</span></a>
          </div>
        </div>
        <div className="right-container">
          <img src={imageDoctor} alt="doctor image" />
        </div>
      </div>

    </div>
  )
}

export default Welcome