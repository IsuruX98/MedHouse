import "../About.css";

const Mission = () => {
  return (
    <div className="sections mission">
      <h1>About Us</h1>
      <div className="mission-description">
        <div className="mission-description-left">
          <h3 className="mission-description-title">Our Mission</h3>
          <p className="mission-description-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            corporis corrupti quisquam, est, ad beatae rerum cum repellat atque
            delectus et rem? Blanditiis eligendi nihil soluta nesciunt
            voluptatibus minima ex. Sint ullam tempore quod! Facere
            reprehenderit, eum laborum, doloremque dolore, laboriosam autem
            veniam quae nihil doloribus vel voluptatibus ab quasi!
          </p>
          <p className="catchPhrase">Your Path to Wellness, One Click Away!</p>
        </div>
        <div className="mission-description-right">
            <img src="/Image/Mission.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
