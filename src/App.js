import React, { useState } from 'react';

import './App.css';

import Menu from './components/header/Menu';
import BeverageContextProvider from './context/beveragesCartContextProvider';

import BeveragesPage from './components/beverages/BeveragesPage';
import OrderPage from './components/order/OrderPage';
import CartPage from './components/cart/CartPage';

const DUMMY_BEVERAGES = [
  {id: 'd1', name: 'Bloody Mary', desc: 'Lo mejor para tu paladar!', ingredients: ['vodka', 'jugo tomate', 'salsa'], price: 25.99},
  {id: 'd2', name: 'Clericot', desc: 'Para todas tus posadas!', ingredients: ['vino blanco espumoso', 'durazno', 'ciruelas'], price: 10.99},
  {id: 'd3', name: 'Cafe Irlandes', desc: 'Para tu Galway Girl! atte. Saoirse Ronnan', ingredients: ['whiskey Irlandes', 'cafe', 'crema de nata'], price: 35.99},
  {id: 'd4', name: 'Margarita', desc: 'Un clásico!', ingredients: ['Tequila', 'Jugo de lima', 'hielo', 'sal'], price: 13.99},
  {id: 'd5', name: 'Manhattan', desc: 'Todo una viaje a la gran Manzana!', ingredients: ['Bourbon', 'vermu rojo'], price: 27.99},
  {id: 'd6', name: 'Mojito', desc: 'La Especialidad de Lion!', ingredients: ['Ron', 'Soda', 'Jugo de Lima', 'Azucar'], price: 18.99},
  {id: 'd7', name: 'Long Island Ice Tea', desc: 'Ay Holly!', ingredients: ['Ron', 'Tequila', 'ginebra','Vodka', 'soda'], price: 5.99},
]


function App() {
  const [page, setPage] = useState('b');

  const changePageHandler = targetPage =>{
    setPage(targetPage);
  }

  let renderedPage = <BeveragesPage onChangePage={changePageHandler} beverages={DUMMY_BEVERAGES} />

  if (page === 'o') renderedPage = <OrderPage beverages={DUMMY_BEVERAGES} />
  if (page === 'c') renderedPage = <CartPage/>

  return (
    <BeverageContextProvider>
      <Menu changeHandler={changePageHandler} />

      <div className='container'>

        {renderedPage}

      </div>
    </BeverageContextProvider>
  )
}

export default App;
