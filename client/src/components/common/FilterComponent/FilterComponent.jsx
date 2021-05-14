import { useEffect, useState } from "react";
import "./FilterComponent.scss";

const FilterComponent = (props) => {
    const [checkboxList, setCheckboxList] = useState(null);

    const changeHandler = (e) => {
        let newCheckboxList = checkboxList.map((item) => {
            return item.name === e.target.value
                ? { ...item, value: e.target.checked }
                : item;
        });
        let checkboxes = newCheckboxList
            .filter((item) => item.value)
            ?.map((item) => item.name) || [];
        setCheckboxList(newCheckboxList);
        props.handler(checkboxes, props.filter.details.value);
    };

    useEffect(() => {
        if (!checkboxList) {
            let newCheckboxList = props.filter.list.map((item) => {
                return {
                    ...item,
                    value: false,
                };
            });
            setCheckboxList(newCheckboxList);
        }
    }, []);

    return (
        <>
            <div className="h5 mt-4 bold">{props.filter.details.name}</div>
            {checkboxList &&
                checkboxList.map((filterType, index) => (
                    <div
                        key={index}
                        className="filterType d-flex align-items-center form-check"
                    >
                        <label className="form-check-label">
                            <input
                                type="checkbox"
                                className={`form-check-input`}
                                onChange={changeHandler}
                                value={filterType.name}
                                checked={filterType.value}
                            />
                            {filterType.swatch && (
                                <div
                                    className="filterType-swatch mr-1 d-inline-block border border-dark"
                                    style={`background:url('${filterType.swatch}')`}
                                ></div>
                            )}
                            <span className={`${filterType.value ? "bold" : "medium"}`}>{filterType.name}</span>
                        </label>
                    </div>
                ))}
        </>
    );
};

export default FilterComponent;
