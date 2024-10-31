import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cartData, productData } from "../../App";
import { Button } from "@headlessui/react";
import './Detailer.css';

function Detailer() {
    const { id } = useParams();
    const detailer_data_all = useContext(productData);
    const { cartFile, setcartFile } = useContext(cartData);
    const navigate = useNavigate();

    // Get the product details using find for a single item
    const detailer_data = detailer_data_all[id];

    function cartUpdater(detailerData) {
        const productId = detailerData.id;
        const productPrice = detailerData.baseprice;

        setcartFile(prevCart => {
            const currentQuantity = prevCart[productId]?.[0] || 0;
            const newQuantity = currentQuantity + 1;

            return {
                ...prevCart,
                [productId]: [newQuantity, productPrice * newQuantity]
            };
        });
        navigate('/cart')
    }

    if (!detailer_data) {
        return <p>Product not found.</p>;
    }

    const { img, title, Description, price } = detailer_data;

    return (
        <section className="p-5 m-auto flex max-w-[1300px] detailer overflow-y-hidden">
            <div className="detailer-left grid place-items-center w-1/2">
                <img src={img} alt="Image of the product" style={{ backgroundSize: 'contain' }} />
            </div>
            <div className="detailer-right w-1/2 h-auto flex flex-col gap-3 justify-center overflow-y-auto">
                <h1 className="font-semibold text-3xl">{title.toUpperCase()}</h1>
                <p className="font-normal">{Description}</p>
                <h1 className="text-2xl">{price}</h1>
                <div className="detailer-btns mt-auto flex flex-wrap gap-2">
                    <Button 
                        onClick={() => cartUpdater(detailer_data)} 
                        className="py-4 w-full bg-yellow-500 rounded-md hover:bg-yellow-600">
                        Add to cart
                    </Button>
                    <Button className="py-4 w-full bg-red-500 rounded-md hover:bg-red-700">
                        Buy now
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Detailer;
