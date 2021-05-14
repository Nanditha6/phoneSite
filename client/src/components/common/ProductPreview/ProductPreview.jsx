import "./ProductPreview.scss";

const ProductPreview = (props) => {
    return (
        <div className="list-item col-6 col-lg-3 col-md-4 mt-4 pb-2">
            <div className="list-item-image mt-3">
                <img
                    className="img-fluid"
                    src={props.product.image}
                    alt={props.product.name}
                />
            </div>
            <div className="list-item-info pl-2">
                <div className="list-item-name mb-0 mt-2 medium">
                    {props.product.name}
                </div>
                <div className="list-item-price bold mt-2">
                    {props.product.price}
                </div>
            </div>
        </div>
    );
};

export default ProductPreview;
