import React, { useContext } from 'react';

import BeveragesContext from '../../context/beveragesCartContext';

import CartItem from './CartItem';

const CartPage = props =>{

    const cartCtx = useContext(BeveragesContext);

    
    const cartItems = cartCtx.beverages.map(item=><CartItem key={item.id} beverage={item}></CartItem>)
    const renderedCart = cartCtx.beverages.length !== 0 ? 
        <ul>{cartItems}</ul> : 
        <h5>Carrito Vacío</h5>;

    return <div>
        <h1>Cart</h1>
            {renderedCart}
    </div>
}

export default CartPage;