import React from 'react';

const BeveragesContext = React.createContext({
    beverages: [],
    addBev: beverage => {},
    removeBev: id =>{}
});

export default BeveragesContext;