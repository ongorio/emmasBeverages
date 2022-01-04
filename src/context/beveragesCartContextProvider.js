import React, { useReducer } from 'react';

import beveragesCartContext from './beveragesCartContext';


const cartReducer = (state, action) =>{

    if (action.type === 'ADD'){
        let itemExist = state.beverages.findIndex(beverage=>{
            return beverage.id === action.item.id;
        });

        
        let updatedItems = state.beverages;
        let updatedItem;
        let newState;


        if (itemExist !== -1){
            updatedItem = state.beverages[itemExist];
            updatedItem = {...updatedItem, amount: updatedItem.amount + action.item.amount}
            updatedItems[itemExist] = updatedItem;
            
            newState = {...state, beverages: updatedItems};

            console.log(newState.beverages[itemExist].amount);
            return newState;
        }else{
            updatedItems = [...updatedItems, action.item];
    
            return {...state, beverages: updatedItems};
        }

    }


    if (action.type === 'REMOVE'){
        const removeItemIndex = state.beverages.findIndex(beverage=>{
            return beverage.id === action.id;
        });

        // console.log(removeItemIndex)

        let removeItem = state.beverages[removeItemIndex];
        let updatedItems = state.beverages;

        removeItem.amount = removeItem.amount - 1;

        // console.log(removeItem);
        if (removeItem.amount === 0){
            updatedItems = state.beverages.filter(beverage=>{
                return beverage.id !== action.id;
            })
        }else {
            updatedItems[removeItemIndex] = removeItem;
        }

        return {...state, beverages:updatedItems};
    }

    return {beverages: []};
};

const BeverageContextProvider = props =>{

    const [beveragesState, dispatchBeverages] = useReducer(cartReducer, {beverages: []})


    const addBeverageHandler = beverage =>{
        dispatchBeverages({type: 'ADD', item: beverage});
    };


    const removeBeverageHandler = id =>{
        dispatchBeverages({type: 'REMOVE', id:id})
    };

    return <beveragesCartContext.Provider value={{
        beverages: beveragesState.beverages,
        addBev: addBeverageHandler,
        removeBev: removeBeverageHandler
    }}>
        {props.children}
    </beveragesCartContext.Provider>
};


export default BeverageContextProvider;