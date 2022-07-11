import React, { useEffect, useState }from 'react'
import BackButton from './BackButton';
import { Link } from 'react-router-dom';

const CartHeader = () => {
  const [cart, setCart] = useState([]);

// useEffect stuff
useEffect(() => {
  readFromLocalStorage();
}, []);


const readFromLocalStorage = () => {
  const localStorageCart = JSON.parse(localStorage.getItem("cart"));
  setCart(localStorageCart ? localStorageCart : []);
}

  return (
    <div className="h-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 
    bg-slate-900 mb-[50px] w-full rounded-b-xl">
       <div className="flex items-center ml-6">
         <BackButton />
       </div>
       <h1 className="flex items-center justify-center text-5xl text-white font-serif">
         Cart
       </h1>
       <Link to={'/cart'}>
       <button className='flex mt-[25px] ml-auto mr-[70px] text-white text-lg hover:underline'>Cart (  <div className='text-red-500'>{cart.length}</div>  )</button>
       </Link>
     </div>
  )
}

export default CartHeader