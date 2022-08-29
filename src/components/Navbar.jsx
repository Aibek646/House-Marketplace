import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true;
        }
    };

    return (
        <footer className="navbar">
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li
                        className="navbarListItem"
                        onClick={() => navigate("/")}
                    >
                        <ExploreIcon
                            fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
                            width="36px"
                            heigth="36px"
                        />
                        <p
                            className={
                                pathMatchRoute("/")
                                    ? "navbarListItemNameActive"
                                    : "navbarListItemName"
                            }
                        >
                            Explore
                        </p>
                    </li>
                    <li
                        onClick={() => navigate("/offers")}
                        className="navbarListItem"
                    >
                        <OfferIcon
                            fill={
                                pathMatchRoute("/offers")
                                    ? "#2c2c2c"
                                    : "#8f8f8f"
                            }
                            width="36px"
                            heigth="36px"
                        />
                        <p
                            className={
                                pathMatchRoute("/offers")
                                    ? "navbarListItemNameActive"
                                    : "navbarListItemName"
                            }
                        >
                            Offer
                        </p>
                    </li>

                    <li
                        onClick={() => navigate("/profile")}
                        className="navbarListItem"
                    >
                        <PersonOutlineIcon
                            fill={
                                pathMatchRoute("/profile")
                                    ? "#2c2c2c"
                                    : "#8f8f8f"
                            }
                            width="36px"
                            heigth="36px"
                        />
                        <p
                            className={
                                pathMatchRoute("/profile")
                                    ? "navbarListItemNameActive"
                                    : "navbarListItemName"
                            }
                        >
                            Person
                        </p>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Navbar;
