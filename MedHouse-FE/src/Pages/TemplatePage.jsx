import { Outlet } from "react-router-dom";

// importing files
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Layout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />  
        </>
    )
}

export default Layout;