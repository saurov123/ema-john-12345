import React from 'react';
import {FaShoppingCart} from "react-icons/fa";
import './Product.css';
const Product = (props) => {
   const {  img, name, price, ratings,}=props.product;
    return (
    <div className='product'>

        <div className='product-info'>
            <img src={img} alt="" />
            <h4>Name : {name}</h4>
            <h4>Ratings : {ratings}</h4>
            <h3>Price : $ {price}</h3> 
             
            
        </div>
        <button onClick={()=>props.addTocart(props.product)} className='btn-cart'> 
        <span className='add-cart'>Add to cart
        </span>
        <FaShoppingCart/>
        </button>

    </div>
    );
};

export default Product;