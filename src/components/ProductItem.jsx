import React from 'react'
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

const ProductItem = ({ id, image, price, title, category, addToCart }) => {
  return (
    <main>
    <Link to={`product/${id}`}>
        <div className='aspect-square p-4 bg-white relative rounded-md'>
          <img src={image} alt="product-image" className="w-full h-full object-contain" />
          <p className="font-bold p-1 bg-white absolute bottom-0 right-4 rounded-t-xl text-orange-600 text-md">PHP {price}</p>
        </div>
        <div>
          <header className="font-bold line-clamp-1 text-xl mt-3">{title}</header>
          <p className='italic text-slate-500'>{category}</p>
        </div>
    </Link>
      <AddToCartButton onClick={() => {addToCart({id, title, price, image, quantity: 1})}}>Add to Cart</AddToCartButton>
    </main>
  );
};

export default ProductItem;