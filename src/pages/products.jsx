import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../components/card";
import { Pagination } from "antd";

function Products() {

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(40);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(40);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then((res) => {
                console.log('products =', res);
                setProducts(res.data.products);
                setTotal(res.data.total);
                setLoading(false);
            })
    }, [limit, skip]);

    return (
        <>
            {loading ? <h1 className="text-center m-5">Loading...</h1> : null}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
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

            <Pagination className="container mb-4 mr-4" onChange={(num) => {
                setSkip((num - 1) * limit)
            }} onShowSizeChange={(page, pageSize) => { setLimit(pageSize) }} align="end" defaultCurrent={1} total={total} pageSize={limit} />
        </>
    )
}

export default Products;

//  <> </>
// () => {}
// ? :  $  