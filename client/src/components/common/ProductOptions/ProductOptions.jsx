import FilterComponent from "../FilterComponent/FilterComponent";

const ProductOptions = (props) => {
    return (
        <div className="p-3">
            <div className="font-weight-bold text-center h3 pb-1 bold">Filters</div>
            {props.filters.map((filter, index) => (
                <FilterComponent
                    key={index}
                    filter={filter}
                    handler={props.handler}
                />
            ))}
        </div>
    );
};

export default ProductOptions;
