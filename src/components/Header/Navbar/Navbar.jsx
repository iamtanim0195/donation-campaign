import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/messages"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>;
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;