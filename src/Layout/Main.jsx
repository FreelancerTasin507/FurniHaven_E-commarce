import { Outlet } from "react-router-dom";
import Navbar from "../sharedPages/Navbar/Navbar";
import Footer from "../sharedPages/Footer/Footer";

const Main = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;