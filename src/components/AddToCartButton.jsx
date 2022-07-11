import React from 'react'


const AddToCartButton = ({type, children, onClick}) => {

  return (
    <button onClick={onClick} type={type} className="w-full px-3 py-4 bg-slate-900 rounded-xl font-bold 
    text-white hover:border-orange-500 text-lg mb-5 border-[6px] border-solid">{children}</button>
  )
}

export default AddToCartButton;