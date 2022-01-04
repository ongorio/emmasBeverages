import React from 'react';

import Card from '../UI/Card';
import classes from './BeveragesDesc.module.css';

const BeverageDesc = props =>{
    console.log();
    return (
        <Card className={classes['extras']}>
            <p className={classes['text']}>This is the best place to find the most refreshing drinks in all world!</p>
        </Card>
    );
};

export default BeverageDesc;