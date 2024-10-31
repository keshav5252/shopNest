import React, { useContext } from 'react'
import { productData } from '../../App';
import Product_card from '../product_card/Product_card'
import './showcase.css';

function Showcase() {
    const data = useContext(productData);
    return (
        <section className='showcase p-5 m-auto max-w-[1300px]'>
           {Object.values(data).map(item => {
            return <Product_card id={item.id} img={item.img} title={item.title} price={item.price} />
           })}
        </section>
    )
}

export default Showcase
