import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Cards from "../components/card";
import { Pagination, Select } from "antd";
import { CartContext } from "../context/cartContext";
import Loader from "../components/loader";


function Products() {

    const { cartItems } = useContext(CartContext);

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [limit, setLimit] = useState(40);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(40);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

    // Show Products And Update Products On Changing Category.
    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then((res) => {
                // console.log('products =', res);
                setProducts(res.data.products);
                setTotal(res.data.total);
                setLoading(false);
            })
    }, [url, limit, skip]);

    // Category.
    useEffect(() => {
        setLoading(true);
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                setCategory(res.data);
                setLoading(false);
            })
    }, []);

    return (
        <div className="container mx-auto">

            {loading ? <Loader /> : null}

            {/* Category */}
            <Select
                onChange={(e) => {
                    console.log('e', e);
                    setUrl(`https://dummyjson.com/products/category/${e}`)
                }}
                className="flex float-end mt-3"
                showSearch
                style={{ width: 300 }}
                placeholder="Search Items"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={category.map((data) => {
                    return (
                        {
                            value: data.slug,
                            label: data.name,
                        }
                    )
                })}
            />

            {/* Products */}
            <section className="text-gray-600 body-font">
                <div className="px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map((data) => {
                                return (
                                    <Cards key={data.id} item={data} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            {/* Pagination */}

            <Pagination
                className="mb-4 mr-4"
                onChange={(num) => {
                    setSkip((num - 1) * limit);
                    setUrl(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
                }}
                onShowSizeChange={(page, pageSize) => {
                    setLimit(pageSize);
                    setUrl(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
                }}
                align="end"
                defaultCurrent={1}
                total={total}
                pageSize={limit}
            />

        </div>
    )
}

export default Products;