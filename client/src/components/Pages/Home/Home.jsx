import Navbar from "../../common/Navbar/Navbar";
import Slider from "../../common/Slider/Slider";
import HeroImage from "../../common/HeroImage/HeroImage";
import Card from "../../common/Card/Card";
import Footer from "../../common/Footer/Footer";
import { MENU_ITEMS } from "../../Constants";

const Home = () => {
    return (
        <>
            <Navbar menu={MENU_ITEMS} />
            <HeroImage imageInfo={{
                imageUrl: "https://image.shutterstock.com/image-photo/usb-charging-cables-smartphone-tablet-600w-780419665.jpg",
                heading: "Smart Phones",
                subHeading: "Go Book it before the stocks run out!",
                buttonText: "Shop Now"
            }}/>
            <div className="row m-0">
                <Card cardDetails={{
                    theme: "white",
                    heading: "Best Deals on ABC Phone",
                    subHeading: "Sale Ends Tonight. Hurry!"
                }}/>
                <Card cardDetails={{
                    theme: "light",
                    heading: "Best Deals on ABC Phone",
                    subHeading: "Sale Ends Tonight. Hurry!"
                }}/>
                <Card cardDetails={{
                    theme: "white",
                    heading: "Best Deals on ABC Phone",
                    subHeading: "Sale Ends Tonight. Hurry!"
                }}/>
                <Card cardDetails={{
                    theme: "light",
                    heading: "Best Deals on ABC Phone",
                    subHeading: "Sale Ends Tonight. Hurry!"
                }}/>
            </div>
            <Slider/>
            <div className="d-md-flex flex-md-equal">
                <Card cardDetails={{
                    theme: "light",
                    heading: "Best Deals on ABC Phone",
                    subHeading: "Sale Ends Tonight. Hurry!",
                    type: "secondary"
                }}/>
                <Card cardDetails={{
                    theme: "dark",
                    heading: "Best Deals on ABC Phone",
                    subHeading: "Sale Ends Tonight. Hurry!",
                    type: "secondary"
                }}/>
            </div>

            <div className="m-5">
                <div className="row">
                    <div className="col-md-5 order-md-1">
                        <img
                            className="img-fluid mx-auto"
                            src="https://image.shutterstock.com/image-vector/phone-simple-clip-art-vector-600w-1608799318.jpg"
                            style={{ width: "500px", height: "500px" }}
                        />
                    </div>
                    <div className="col-md-7 order-md-2 text-center d-flex align-items-center">
                        <div className="d-flex flex-column align-items-center">
                            <h1>
                                It's that good.
                                <span className="text-muted">
                                    {" "}
                                    See for yourself.
                                </span>
                            </h1>
                            <p className="lead">
                                Donec ullamcorper nulla non metus auctor
                                fringilla. Vestibulum id ligula porta felis
                                euismod semper. Praesent commodo cursus magna,
                                vel scelerisque nisl consectetur. Fusce dapibus,
                                tellus ac cursus commodo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
