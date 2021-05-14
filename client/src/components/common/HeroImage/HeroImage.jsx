import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./HeroImage.scss";

const HeroImage = (props) => {
    const { imageUrl, heading, subHeading, buttonText } = props.imageInfo;
    return (
        <div 
            style={{backgroundImage: `url(${imageUrl})`}}
            className="hero-image position-relative overflow-hidden text-center bg-light"
        >
            <div className="hero-image-info col-md-5 p-lg-5 mx-auto my-5 py-3">
            <h1 className="display-4 font-weight-normal">{heading}</h1>
            <p className="lead font-weight-normal">{subHeading}</p>
            <Link to="/list">
                <Button variant="info">
                    {buttonText}
                </Button>
            </Link>
            </div>
        </div>
    );
}

export default HeroImage;