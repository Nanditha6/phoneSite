import { useEffect, useState } from "react";
import Navbar from "../../common/Navbar/Navbar";
import ProductOptions from "../../common/ProductOptions/ProductOptions";
import ProductPreview from "../../common/ProductPreview/ProductPreview";
import { MENU_ITEMS } from "../../Constants";
import { getData } from "../../service";

const List = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [productList, setProductList] = useState([]);
    const [filters, setFilters] = useState([]);
    const [selected, setSelected] = useState({});

    const getFilterValues = function (list, property, swatches) {
        let required = [];
        if (list && list.length) {
            list.forEach((item) => {
                let isExist = required.find(
                    (req) => req["name"] === item[property]
                );
                if (!isExist) {
                    required.push({
                        name: item[property],
                        ...(swatches
                            ? { swatch: swatches[item[property]] }
                            : {}),
                    });
                }
            });
        }
        return required;
    };

    const filterProductList = (list, flag, selectedList) => {
        if (flag) {
            let filters = Object.keys(selectedList);
            let newList = list;
            filters.forEach((filter) => {
                let values = selectedList[filter];
                if (values && values.length) {
                    let tempList = [];
                    values.forEach((value) => {
                        let valueList = newList.filter(
                            (item) => item[filter] === value
                        );
                        valueList.forEach((valueItem) => {
                            let isExist = tempList.find(
                                (item) => item.pid === valueItem.pid
                            );
                            if (!isExist) {
                                tempList.push(valueItem);
                            }
                        });
                    });
                    newList = tempList;
                }
            });
            return newList;
        }
        return list;
    };

    useEffect(() => {
        getData().then((data) => {
            setProductList(data);
            setAllProducts(data);
            setFilters([
                {
                    details: {
                        name: "Brand",
                        value: "brand",
                    },
                    list: getFilterValues(data, "brand"),
                },
            ]);
        });
    }, []);

    const handleCheckboxClick = (colorsList, filterName) => {
        const newSelected = { ...selected, [filterName]: colorsList };
        setSelected(newSelected);
        const newProductList = filterProductList(
            allProducts,
            true,
            newSelected
        );
        setProductList(newProductList);
    };

    return (
        <>
        <Navbar menu={MENU_ITEMS} />
        <div className="container-fluid p-0 m-0">
            <div className="d-flex p-0 m-0">
                <div className="col-3 bg-light">
                    <ProductOptions
                        filters={filters}
                        handler={handleCheckboxClick}
                    />
                </div>
                <div className="col-9 d-flex flex-wrap">
                    {productList.map((product, index) => (
                        <ProductPreview product={product} key={index} />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default List;
