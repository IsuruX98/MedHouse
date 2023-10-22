import { Outlet } from "react-router-dom";

// importing files
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import App from "../App";

const Layout = () => {
  return (
    <>
      <Navbar />
      <App />
      <Footer />
    </>
  );
};

export default Layout;
