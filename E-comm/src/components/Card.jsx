import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/cartSlice';

function Card({ product }) {
    const { title, price, description, image } = product;
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
};

    return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-60 md:w-72 lg:w-80 flex flex-col">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-lg font-bold mb-4">${price}</p>
        <button 
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors"
            onClick={handleAddToCart}
        >
            Add to Cart
        </button>
        </div>
    </div>
);
}

export default Card;
