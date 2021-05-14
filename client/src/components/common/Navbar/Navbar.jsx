import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-black">
            <Link to="/">
                <span className="navbar-brand bold mr-4">Brand</span>
            </Link>
            <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav d-flex justify-content-between">
                    {props.menu.map((item, index) => (
                        <a
                            href={item.link}
                            className="nav-item nav-link text-white mr-4"
                            key={index}
                        >
                            {item.name}
                        </a>
                    ))}
                    {/* <form className="form-inline ml-auto">
                        <input
                            type="text"
                            className="form-control mr-sm-2"
                            placeholder="Search"
                        />
                        <button type="submit" className="btn btn-outline-light">
                            Search
                        </button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
