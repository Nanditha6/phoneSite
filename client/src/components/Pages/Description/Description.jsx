import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Description.scss";

const Description = (props) => {
    return (
        <div className="row m-4">
            <div className="col-md-6 mb-4 mb-md-0">
                <div className="row">
                    <figure className="view overlay rounded z-depth-1 main-img">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                            className="img-fluid z-depth-1"
                        />
                    </figure>
                </div>
            </div>
            <div className="col-md-6">
                <div className="m-5">
                    <h3 className="bold">Fantasy T-shirt</h3>
                    <p className="mb-2 text-muted text-uppercase small">
                        Shirts
                    </p>
                    <p>
                        <span className="mr-1">
                            <strong>$12.99</strong>
                        </span>
                    </p>
                    <p className="pt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam, sapiente illo. Sit error voluptas repellat
                        rerum quidem, soluta enim perferendis voluptates
                        laboriosam. Distinctio, officia quis dolore quos
                        sapiente tempore alias.
                    </p>
                    <div className="table-responsive">
                        <table className="table table-sm table-borderless mb-0">
                            <tbody>
                                <tr>
                                    <th className="pl-0 w-25 medium" scope="row">
                                        Model
                                    </th>
                                    <td>Shirt 5407X</td>
                                </tr>
                                <tr>
                                    <th className="pl-0 w-25 medium" scope="row">
                                        Color
                                    </th>
                                    <td>Black</td>
                                </tr>
                                <tr>
                                    <th className="pl-0 w-25 medium" scope="row">
                                        Delivery
                                    </th>
                                    <td>USA, Europe</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className="mt-4">
                        <div className="medium">Size</div>
                        <div className="mt-3 d-flex size">
                            <Button
                                variant="secondary"
                            >-</Button>
                            <input
                                className="quantity text-center"
                                min="0"
                                name="quantity"
                                value="1"
                                type="number"
                            />
                            <Button
                                variant="secondary"
                            >+</Button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="medium">Quantity</div>
                        <div className="mt-3">
                            <div className="form-check form-check-inline pl-0">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="small"
                                    name="materialExampleRadios"
                                    checked
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    for="small"
                                >
                                    Small
                                </label>
                            </div>
                            <div className="form-check form-check-inline pl-0">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="medium"
                                    name="materialExampleRadios"
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    for="medium"
                                >
                                    Medium
                                </label>
                            </div>
                            <div className="form-check form-check-inline pl-0">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="large"
                                    name="materialExampleRadios"
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    for="large"
                                >
                                    Large
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 d-flex justify-content-center">
                        <Button variant="dark" size="lg">Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
