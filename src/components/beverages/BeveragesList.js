import React from 'react';


import classes from './BeveragesList.module.css';
import BeveragesListItem from './BeveragesListItem';




const BeveragesList = props =>{

    const beverages = props.beverages.map(item=>{
        return <BeveragesListItem
            key={item.id}
            name={item.name}
            desc={item.desc}
            ingredients={item.ingredients}
            price={item.price}
            onOrderClick={props.onOrder}
            />
    })


    return <div className={classes['bev-list']}>

            {beverages}

    </div>
};

export default BeveragesList