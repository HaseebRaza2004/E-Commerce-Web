import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../components/card";
import { useNavigate } from "react-router";


function Home() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=20')
            .then((res) => {
                setProducts(res.data.products)
            })
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl text-center font-serif my-2">Welcome, To our platform.</h1>
                    <p className="text-2xl text-center font-serif my-2">Our products are carefully selected to ensure that you get the best quality products in best price.</p>
                    <Button onClick={() => { navigate('/products') }} className="my-2 py-3 px-5 border-gray-300 border" type="text">See All Products <ArrowRightOutlined /></Button>
                </div>
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
            </div>
        </>
    )
}

export default Home;