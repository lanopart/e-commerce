import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import AddToCartButton from '../components/AddToCartButton';
import QuantityBtn from '../components/QuantityBtn';

const ProductPage = () => {
  const { productId } = useParams();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [cart, setCart] = useState([]);

  // Fetch the data from fakestore API
  // Set it into the state

  const fetchDataFromApi = async () => {
    const { data } = await axios.get(
      'https://fakestoreapi.com/products/' + productId
    );

    const { id, title, price, description, image } = data;
    setId(id);
    setTitle(title);
    setPrice(price);
    setDescription(description);
    setImage(image);
  };

  useEffect(() => {
    fetchDataFromApi();
    readFromLocalStorage();
  }, []);

  const addToCart = ({id, title, price, image}) => {
    setCart([...cart, {id, title, price, image}]);
    window.alert("Product has been added")
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  const readFromLocalStorage = () => {
    const localStorageCart = JSON.parse(localStorage.getItem("cart"));
    setCart(localStorageCart ? localStorageCart : []);
  }

  return (
    <main>
      <Header headerTitle="Product"/>
      <div className='mt-[80px] absolute z-2 ml-[300px]'>
      <div className="aspect-square p-4 bg-white rounded-xl h-[400px] grid grid-cols-2 gap-10 mt-10 w-[800px]">
        <img src={image} alt="product-image" className="h-[300px] object-contain m-auto"/>
        <div>
        <p className="font-bold bg-white text-4xl rounded-xl text-orange-600 mt-5">PHP {price}</p>
        <div>
          <header className="font-bold line-clamp-2 text-2xl mt-10">{title}</header>
          <p className="italic text-slate-500 line-clamp-2">{description}</p>
          <QuantityBtn />
        </div>
        <AddToCartButton onClick={() => {addToCart({id, title, price, image })}} className='mt-[50px]'>Add to Cart</AddToCartButton>
        </div>
      </div>
      </div>
    </main>
  );
};

export default ProductPage;
