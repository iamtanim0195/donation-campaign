import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/NavBar/NavBar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;