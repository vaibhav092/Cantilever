import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,clearCart } from '../app/cartSlice';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClear=()=>{
    dispatch(clearCart())
  }

  const handleAdd=()=>{
    navigate("/")
  }
  return (
    <div className="cart-page p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <>
        <p>Your cart is empty.</p>
        <button onClick={handleAdd}
        className='" bg-red-500 text-white py-2 px-4 rounded-lg'
        > Add Items</button>
        </>
      ) : (
        <div className="cart-items flex flex-col gap-4">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item bg-white shadow-lg rounded-lg overflow-hidden flex items-center p-4">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover mr-4" />
              <div className='flex-grow'>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-lg font-bold mb-2">${item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded "
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        <button onClick={handleClear}
        className='bg-slate-600 text-white rounded-lg w-32 h-auto text-xl font-medium ml-[92%]'
        >Clear</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
