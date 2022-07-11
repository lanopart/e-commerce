import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from '../components/ProductItem';
import Header from '../components/Header';


const ProductListPage = () => {
  // State stuff
    const [ products, setProducts] = useState([]);
    const [ status, setStatus ] = useState("all");
    const [ filteredCategory, setFilteredCategory ] = useState([]);
    const [ cart, setCart ] = useState([]);

// Fetch all products
// set it to state 'products'
const fetchAllProducts = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products');

    setProducts(data);
}

// useEffect stuff
useEffect(() => {
  fetchAllProducts();
  readFromLocalStorage();
}, []);

useEffect(() => {
  filterHandler();
}, [products, status]);


const addToCart = ({title, price, image, quantity, id}) => {
  let res = cart.find((element) => {
    return element.id === id;
  });
  if (res !== undefined) {
    res.quantity++;
    setCart([...cart]);
  } else {
    setCart([...cart, { id, title, price, image, quantity}]);
  }
}

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [addToCart]);

const readFromLocalStorage = () => {
  const localStorageCart = JSON.parse(localStorage.getItem("cart"));
  setCart(localStorageCart ? localStorageCart : []);
}



// Function event
const categoryHandler = (e) => {
  setStatus(e.target.value);
};

const filterHandler = () => {
  switch(status) {
    case "Men's clothing":
      setFilteredCategory(products.filter(product => product.category === "men's clothing"));
      break;
    case "Jewelery":
      setFilteredCategory(products.filter(product => product.category === "jewelery"));
      break;
    case "Electronics":
      setFilteredCategory(products.filter(product => product.category === "electronics"));
      break;
    case "Women's clothing":
      setFilteredCategory(products.filter(product => product.category === "women's clothing"));
      break;
      default:
        setFilteredCategory(products);
        break;
  }
};


// RETURN
  return (
    <main className='bg-none'>
      <Header headerTitle="ProductList"/>
      <div className='mt-[100px] absolute z-2'>
      <select onChange={categoryHandler} className="h-10 w-60 rounded-lg mb-3 flex items-center m-auto text-sm 
      border-solid border-slate-900 border-2">
        <option value="All">All</option>
        <option value="Men's clothing">Men's clothing</option>
        <option value="Jewelery">Jewelry</option>
        <option value="Electronics">Electronics</option>
        <option value="Women's clothing">Women's clothing</option>
      </select>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 pr-20 pl-20 mb-10">
           {filteredCategory.map((product) => (
               <ProductItem
               id={product.id}
               key={product.id} 
               image={product.image}
               price={product.price}
               title={product.title}
               category={product.category}
               addToCart={addToCart}
               ></ProductItem>
           ))}
        </section>
        </div>
    </main>
  );
};

export default ProductListPage;