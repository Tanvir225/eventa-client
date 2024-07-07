import { Outlet } from "react-router-dom";
import Footer from "../Component/Share/Footer/Footer";
import Navbar from "../Component/Share/Navbar/Navbar";


const Main = () => {
    return (
        <div className="max-xl:max-w-7xl max-xl:mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};


export default Main;