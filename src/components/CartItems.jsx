import React from 'react'
import CartQuantity from '../components/CartQuantity';
import RemoveButton from './RemoveButton';


const CartItems = ({ image, price, title, removeHandler, quantity }) => {

  return (
    <main className='mb-2'>
        <div className='hover:bg-black pb-1 pt-1 bg-slate-900 rounded-2xl w-auto grid grid-cols-5'>
          <img src={image} alt="product-image" className="h-[60px] rounded-md flex items-center m-auto" />
          <span className="line-clamp-2 text-sm text-white flex items-center m-auto">{title}</span>
          <CartQuantity quantity={quantity} className="-mr-10"/>
          <p className="font-bold rounded-t-xl text-orange-400 text-md flex items-center m-auto">PHP {price}</p>
          <RemoveButton onClick={removeHandler} />
        </div>
    </main>
  );
};

export default CartItems;