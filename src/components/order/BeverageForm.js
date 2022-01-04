import React, { useState, useContext } from 'react';

import classes from './BeverageForm.module.css'

import BeveragesContext from '../../context/beveragesCartContext';

const BeverageForm = props =>{

    const [value, setValue] = useState(1);

    const cartCtx = useContext(BeveragesContext);

    const onChangeHandler = event =>{
        setValue(event.target.value);
    }


    const onSubmitHandler = event =>{
        event.preventDefault();
        // console.log(props.bev);

        const item = {...props.bev, amount: Number(value) };

        cartCtx.addBev(item);

    };

    return <form onSubmit={onSubmitHandler}>
        <div className={classes['form-control']}>
            <label htmlFor='beverage1'>{props.bev.name}</label>

            <span className={classes['actions']}>
                <input id='beverage1' type='number' min='1' step='1' max={10} value={value} onChange={onChangeHandler}/>
                <button type='submit'>Add+</button>
            </span>
        </div>
    </form>
};

export default BeverageForm;