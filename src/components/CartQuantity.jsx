import React, { useState } from 'react'

const CartQuantity = () => {
    const [ quantity, setQuantity ] = useState(0);

    const addQuantityHandler = () => {
        setQuantity(quantity + 1)
    };

    const minusQuantityHandler = () => {
        if (quantity === 0) {
            return disabled=true;
        } else {
            return setQuantity(quantity - 1);
        }
    };

  return (
    <div className="flex items-center justify-center mt-5 mb-5">
        <button onClick={minusQuantityHandler}
        className="mr-[20px] w-10 text-md hover:bg-gray-400 rounded-full text-white">-</button>
        <span className='text-sm text-white'>{quantity}</span><br></br>
        <button onClick={addQuantityHandler}
        className="ml-[20px] w-10 text-md hover:bg-gray-400 rounded-full text-white">+</button>
    </div>

  )
}

export default CartQuantity;