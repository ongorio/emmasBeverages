import React, { useContext, useEffect, useState } from 'react';

import classes from './CartItem.module.css';

import BeveragesContext from '../../context/beveragesCartContext';

const CartItem = props =>{

    const totalPrice = props.beverage.price * props.beverage.amount

    const cartCtx = useContext(BeveragesContext);

    const [btnClicked, setBtnClicked] = useState(false);

    const onAddHandler = event => {
        setBtnClicked(true);
        cartCtx.addBev({...props.beverage, amount: 1});
    }

    const onRemoveHandler = event =>{
        cartCtx.removeBev(props.beverage.id);
        setBtnClicked(true);
    };


    useEffect(()=>{
        const identifier = setTimeout(()=>{
            setBtnClicked(false);
        }, 500);
        return ()=>{
            clearTimeout(identifier);
        };
    }, [btnClicked]);


    return <div className={classes['cart-item']}>

        <h3>{props.beverage.name}</h3>

        <div className={classes['flexer']}>
            <p className={classes['cart-item-amount']}>
                x{props.beverage.amount}
            </p>

            <p className={classes['cart-item-amount']}>
               ${totalPrice.toFixed(2)}
            </p>

            <div className={classes['flex-right']}>
                    <button className={`${classes['btn']} ${classes['btn-add']}`} onClick={onAddHandler}>Add One</button>

                    <button className={`${classes['btn']} ${classes['btn-remove']}`} onClick={onRemoveHandler}>Remove One</button>
            </div>
        </div>
        
    </div>

};

export default CartItem;