import React from 'react';

import classes from './BeveragesFormList.module.css';

import BeverageForm from './BeverageForm';



const BeveragesFormList = props =>{
    const beveragesForms = props.beverages.map((item, index)=>{
        return <BeverageForm key={index} bev={item} />
    })

    return <div className={classes['form-list']}>
        {beveragesForms}
    </div>

};

export default BeveragesFormList;
