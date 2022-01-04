import React from "react";

import BeverageDesc from './BeveragesDesc';
import BeveragesList from './BeveragesList';


const BeveragesPage = props =>{

    return <>
        <h1 style={{textAlign:'center'}}>Beverages Menu</h1>
        <BeverageDesc/>
        <BeveragesList beverages={props.beverages} onOrder={props.onChangePage} />
    </>

};

export default BeveragesPage;