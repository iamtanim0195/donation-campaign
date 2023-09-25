import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;