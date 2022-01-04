import React from 'react';


import classes from './BeveragesListItem.module.css'

const BeveragesListItem = props =>{

    const ingredients = props.ingredients.map((item, index)=>{
        return <li key={index}>{item}</li>
    });

    const onClickHandler = event =>{
        props.onOrderClick('o');
    }

    return <div className={classes['bev-list-item']}>
        <h4>{props.name}</h4>
        <hr/>

        <p><strong>Descripción:</strong> {props.desc}</p>
        <p><strong>Ingredientes:</strong></p>
        <ul>
            {ingredients}
        </ul>

        <span className={classes['order-actions']}>
            <p><strong>Precio:</strong> {props.price}$</p>
            <button type='button' className={classes['order-btn']} onClick={onClickHandler}>Ordenar</button>
        </span>
        <hr/>
    </div>
};

export default BeveragesListItem;

