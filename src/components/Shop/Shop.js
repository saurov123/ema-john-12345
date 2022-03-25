import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import Card from '../Card/Card';
import './Shop.css';
import { addToDb } from '../../utilities/fakedb';
// import Product from './components/Product/Product';
const Shop = () => {
    const [products, setproducts]= useState([]);
    const [cart ,setcart] =useState([]) ;
    useEffect(() =>{
         fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])

    const addTocart = (product) =>{
     console.log('okk ')
       const newCart = [...cart , product]
       setcart(newCart);
       addToDb(product.id);
    } 
    return (
        <div className='shops-container'>
            <div className='product-container'>
            {
                products.map(product=><Product
                key={product.id}
                product={product}
                addTocart={addTocart}
                >
                
                </Product>)
            }
            </div>
            <div className='order-container'>
                <Card cart={cart}></Card>
               
            </div>
        </div>
    );
};
export default Shop;