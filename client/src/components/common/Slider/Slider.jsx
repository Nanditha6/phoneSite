import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Slider.scss";
import { SLIDER_ITEMS } from "../../Constants";

const Slider = (props) => {
    return (
        <Carousel fade controls={false} interval={3000} pause={false}>
            {SLIDER_ITEMS.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt={item.imageAlt}
                    />
                    <Carousel.Caption>
                        <h3 class={`${item.theme === "light"? "text-white": "text-dark"} bold`}>{item.heading}</h3>
                        <p class={`${item.theme === "light"? "text-white": "text-dark"} bold`}>{item.subheading}</p>
                        <Button variant={`outline-${item.theme} bold`}>
                            {item.buttonText}
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;
