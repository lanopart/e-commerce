import React from 'react'

const BackButton = () => {

  const backBtnHandler = () => {
    history.go(-1);
  }

  return (
    <button onClick={backBtnHandler} className='flex items-center justify-center text-xl h-15 w-[100px] border-white 
    border-[2px] border-solid rounded-lg hover:bg-white hover:text-slate-900 text-white font-bold'>Back</button>
  );
};

export default BackButton;