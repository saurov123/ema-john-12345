import React from 'react';
import './Card.css'
const Card = (props) => {
        const {cart} =props;
        
        let total=0;
        let shipping=0;
        for ( const product of cart){
            total=total+product.price;
            shipping=shipping+product.shipping;
        }
     const tax =parseFloat((total * 0.1).toFixed(2));
     const grandTotal=total+shipping+tax;
    return (
        <div className='card'>
            <h2>order summary</h2>
            <h3>selected items : {cart.length}</h3>
            <h3>Total price : $ {total}</h3>
            <h3>Total shipping : $ {shipping}</h3>
            <h3>Tax : $ {tax}</h3>
            <h3>Grand Total: $ {grandTotal}</h3>
        </div>
    );
};

export default Card;