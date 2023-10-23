import Welcome from "./Subfiles/Welcome";
import Reservations from "./Subfiles/Reservations";
import Facilities from "./Subfiles/Facilities";
import ContactUs from "./Subfiles/ContactUs";
import "./home.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <Welcome />
      <Reservations />
      <Facilities />
      <ContactUs />
    </>
  );
}

export default Home;
