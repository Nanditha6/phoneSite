import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
    const { theme = "light", heading, subHeading, type } = props.cardDetails;
    return (
        <div
        className={`${type === "secondary"? "": "col-lg-3 col-ms-6 col-sm-6 col-xs-12"} bg-${theme} pt-3 px-3 p-md-5 text-center overflow-hidden ${theme === "dark" ? "text-white": ""}`}>
            <Link to="/list">
                <div
                    className={`${theme === "dark" ? "text-white": ""}`}
                >
                    <div className="my-3 p-3">
                        <h2 className="display-5 bold">{heading}</h2>
                        <p className="lead">{subHeading}</p>
                    </div>
                    <div className="bg-dark box-shadow mx-auto"></div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
