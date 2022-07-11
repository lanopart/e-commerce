import React from 'react'
import { Link } from 'react-router-dom';
import FrontButton from './components/FrontButton';
import './index.css';

const App = () => {
  return (
    <main>
      <div className='flex items-center justify-center h-500'>
        <img src="src/img/shop.png" alt="front-image" className="rounded-[50%] h-80 mt-20 border-[6px] 
        bg-slate-900 border-solid border-slate-900 shadow-2xl	shadow-black" />
      </div>
      <div className='flex items-center justify-center'>
      <Link to={"product-list"}>
        <FrontButton />
      </Link>
      </div>
    </main>
  );
};

export default App;