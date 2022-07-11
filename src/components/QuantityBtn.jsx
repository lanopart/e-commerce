import React, { useState } from 'react'

const QuantityBtn = () => {
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
        <p className='-ml-[50px] mr-10 text-md'>Quantity:</p>
        <button onClick={minusQuantityHandler}
        className="mr-10 border-2 border-solid w-10 font-bold text-xl hover:bg-gray-400 rounded-xl">-</button>
        <span className='text-md'>{quantity}</span><br></br>
        <button onClick={addQuantityHandler}
        className="ml-10 border-2 border-solid w-10 font-bold text-xl hover:bg-gray-400 rounded-xl">+</button>
    </div>

  )
}

export default QuantityBtn;