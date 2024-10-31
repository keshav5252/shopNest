import React, { useContext } from 'react';
import { cartData, productData } from '../../App';
import { Button } from '@headlessui/react';
import './Cart.css';

function Cart() {
  const { cartFile, setcartFile } = useContext(cartData);
  const data = useContext(productData);

  function decreaseProduct(item) {
    setcartFile(prevCart => {
      const quantity = prevCart[item][0];
      if (quantity <= 1) {
        const confirmation = confirm("Do you want to delete that item from the cart?");
        if (confirmation) {
          const { [item]: _, ...newCartFile } = prevCart; // Create a new object without the deleted item
          return newCartFile;
        } else {
          return prevCart; // Prevent quantity from going below 1
        }
      }
      const newQuantity = quantity - 1;
      const pricePerUnit = data[item].baseprice; // Adjust price if available in `data`
      return {
        ...prevCart,
        [item]: [newQuantity, newQuantity * pricePerUnit]
      };
    });
  }

  function increaseProduct(item) {
    setcartFile(prevCart => {
      const newQuantity = prevCart[item][0] + 1;
      const pricePerUnit = data[item].baseprice; // Use price from `data` if available
      return {
        ...prevCart,
        [item]: [newQuantity, newQuantity * pricePerUnit]
      };
    });
  }

  return (
    <section className='cart p-5 m-auto flex max-w-[1300px]'>
      <div className="cart-left w-3/4 grid gap-4">
        {Object.keys(cartFile).length > 0 ? (  // Check if cartFile has any items
          Object.keys(cartFile).map(item => {
            const p_data = data[item];
            return (
              <div key={item} className="carter p-3 bg-[whitesmoke] border rounded-md">
                <div className='product_ImageContainer'>
                  <img src={p_data.img} alt="product" className="product_Image rounded-lg" />
                </div>
                <h1 className='text-lg mt-2'>{p_data.title.toUpperCase()}</h1>
                <h1 className='font-bold mt-1'>₹{cartFile[item][1]}</h1>
                <div className="quantity flex w-full items-center text-center mt-2">
                  <Button onClick={() => decreaseProduct(item)} className='bg-green-950 py-2 w-full text-white rounded-md'>-</Button>
                  <p className='w-1/2'>{cartFile[item][0]}</p>
                  <Button onClick={() => increaseProduct(item)} className='bg-green-950 py-2 w-full text-white rounded-md'>+</Button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Your cart is empty</p>  // Display message if cart is empty
        )}
      </div>
      <div className="cart-right w-1/4">
        <Button className='py-2 w-full rounded-full bg-yellow-500'>Continue</Button>
      </div>
    </section>
  );
}

export default Cart;
