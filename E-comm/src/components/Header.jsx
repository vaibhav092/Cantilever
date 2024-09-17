import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { changeCategory } from '../app/catSlice'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate=useNavigate()
    const dispatch= useDispatch()
    const currentVal = useSelector((state) => state.category.Category); 
    const handleClick=(e)=>{
        e.preventDefault()
        const newVal=e.target.value
        dispatch(changeCategory(newVal))
        navigate("/")
    }
    return (
        <>
            <div className='main flex flex-wrap bg-orange-500 w-screen h-auto min-h-12 text-amber-50 place-content-around'>
                <div className='logoand img mt-1.5 py-2  mb-1 flex '>
                    <h2 className='text-xl font-medium '>Style Hub</h2>
                    <img src="../../public/vite.svg"  className="h-7 w-7" alt="" />
                </div>
                <div className='Category flex gap-2 mt-1.5 text-lg'>
                <button className={`button  ${currentVal=="All"?"bg-teal-500":""}`} value="All" onClick={handleClick}>Trends</button>
                <button className={`button  ${currentVal=="Men"?"bg-teal-500":""}`} value="Men" onClick={handleClick}>Men</button>
                <button className={`button  ${currentVal=="Women"?"bg-teal-500":""}`} value="Women" onClick={handleClick}>Women</button>
                <button className={`button  ${currentVal=="Children"?"bg-teal-500":""}`} value="Accessories" onClick={handleClick}>Accessories</button>
                </div>
                <div className='cart h-7 w-7 flex  gap-2 mt-2 text-xl font-medium'>
                    <Link to="/cart" className='flex '>
                        <h2>Cart</h2>
                        <img className=" text-xl" src="../../public/cart.svg" alt="" />
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default Header