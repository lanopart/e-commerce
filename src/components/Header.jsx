import BackButton from './BackButton';
import { Link } from 'react-router-dom';
import React, { useEffect, useState }from 'react'


const ProductListHeader = (props) => {
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
   bg-slate-900 fixed z-[2] mb-[100px] w-full rounded-b-xl">
      <div className="flex items-center ml-6">
        <BackButton />
      </div>
      <h1 className="flex items-center justify-center text-5xl text-white font-serif">
        {props.headerTitle}
      </h1>
      <Link to={'/cart'}>
      <button className='flex mt-[25px] ml-auto mr-[70px] text-white text-lg hover:underline'>Cart ( <div className='text-red-500'>{cart.length}</div> )</button>
      </Link>
    </div>
  );
};

export default ProductListHeader;
