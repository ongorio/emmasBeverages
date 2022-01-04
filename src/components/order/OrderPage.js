import React from 'react';

import BeveragesFormList from './BeveragesFormList';

const OrderPage = props =>{

    return <>
        <h1>Order Beverages</h1>
        <BeveragesFormList beverages={props.beverages} />
    </>
};

export default OrderPage;