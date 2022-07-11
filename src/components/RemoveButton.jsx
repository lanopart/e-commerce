import React from 'react'

const RemoveButton = ({onClick}) => {
  return (
    <button onClick={onClick} className='border-[1px] border-solid rounded-2xl w-[75px] h-[25px]
     text-white m-auto hover:text-black hover:bg-white font-bold text-[12px]'>Remove</button>
  );
};

export default RemoveButton;