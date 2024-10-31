import React from 'react';
import { Button } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';


function Product_card(props) {
  const navigate = useNavigate();

  function transferUser() {
    navigate(`/${props.id}`)
  }
  return (
    <div className="product bg-[whitesmoke] border rounded-sm p-3 flex flex-col items-center">
      <div className="product_ImageContainer">
        <img src={props.img} alt={props.title} className="product_Image" />
      </div>
      <p className="product_Title font-light">{props.title}</p>
      <h2 className="product_price font-bold">{props.price}</h2>
      <Button onClick={transferUser} className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white mt-2">
      View
    </Button>
    </div>
  );
}

export default Product_card;
