import React, { useState, useEffect } from 'react'
import CartHeader from '../components/CartHeader';
import axios from 'axios';
import CartItems from '../components/CartItems';

const CartPage = ({id, price}) => {
  const [ products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);



  const fetchAllProducts = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products');

    setProducts(data);
}
// useEffect stuff
useEffect(() => {
  fetchAllProducts();
  readFromLocalStorage();
}, []);


const readFromLocalStorage = () => {
  let localStorageCart = JSON.parse(localStorage.getItem("cart"));
  setCart(localStorageCart ? localStorageCart : []);
}


  return (
    <main>
      <CartHeader />
      <div className='grid grid-cols-2'>
        <div className='h-auto rounded-xl w-auto m-auto pl-10 pr-10 flex items-center justify-center columns-[1000px]'>
        {cart.length === 0 && <div className='text-xl text-gray-600 font-bold'>Cart is empty</div>}
            <li className='list-none'>
            {cart.map((item, pos) => (
                <CartItems
                id={item.id}
                key={pos} 
                image={item.image}
                price={item.price}
                title={item.title}
                category={item.category}
                quantity={item.quantity}
                //  removeHandler={removeHandler}
                ></CartItems>
            ))}
            </li>
          </div>
          <div className='bg-white h-[110px] rounded-lg w-[250px]'>
            <h1 className='text-black font-bold text-xl mt-5'>Total: {price}</h1>
            <div className='border-b-2 border-solid border-gray-300 w-full'></div>
            <button className='flex items-center justify-center border-[1px] border-solid border-black mt-2 w-[180px] h-10 
            m-auto rounded-lg hover:bg-slate-900 hover:text-white'>Check-Out</button>
          </div>
      </div>
    </main>
  )
}

export default CartPage;