import React from 'react';

import classes from './Menu.module.css';

const Menu = props =>{

    const buttonClickHandler = page =>{
        props.changeHandler(page)
    };


    return (
        <div className={classes['menu-background']}>
            <div className='container'>
                <h2 className={`${classes['menu-title']}`}>Emma's Beverages</h2>
            </div>
            <nav className={`${classes.menu} container`}>
                <button className={classes['menu-item']} onClick={buttonClickHandler.bind(null, 'b')} >Beverages</button>
                <button className={classes['menu-item']} onClick={buttonClickHandler.bind(null, 'o')} >Order</button>
                <button className={classes['menu-item']} onClick={buttonClickHandler.bind(null, 'c')} >Cart</button>
            </nav>
        </div>
    )
};

export default Menu;