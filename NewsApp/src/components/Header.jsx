import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {receiveVal} from "../app/newsSlice"
function Header() {

    const [buttn,setButtn]=React.useState("")
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.news.searchValue);
    const handleClick=(e)=>{
        e.preventDefault()
        const newVal=e.target.value;
        dispatch(receiveVal(newVal))
    }
    return (
    <>
        <div className='flex flex-wrap bg-indigo-600 text-amber-50 place-content-around'>
            <div id='Logo' className='text-2xl py-3 ml-5' >
                <h2>NewsApp</h2>
            </div>
            <div id="Elements" className='flex flex-wrap gap-4 text-xl'>
                    <button 
                        className={`text-amber-50 rounded-lg ${searchValue  === "Latest" ? "text-orange-500" : ""}`} 
                        value="Latest" 
                        onClick={handleClick}
                    >
                        Latest
                    </button>
                    <button 
                        className={`text-amber-50 rounded-lg ${searchValue  === "Cricket" ? "text-orange-500" : ""}`} 
                        value="Cricket" 
                        onClick={handleClick}
                    >
                        Cricket
                    </button>
                    <button 
                        className={`text-amber-50 rounded-lg ${searchValue  === "Politics" ? "text-orange-500" : ""}`} 
                        value="Politics" 
                        onClick={handleClick}
                    >
                        Politics
                    </button>
                    <button 
                        className={`text-amber-50 rounded-lg ${searchValue  === "Technology" ? "text-orange-500" : ""}`} 
                        value="Technology" 
                        onClick={handleClick}
                    >
                        Technology
                    </button>
            </div>
            <div id="searchbar" className=''>
                <input
                value={buttn}
                type='text'
                onChange={(e)=>{
                    setButtn(e.target.value)
                    // console.log(searchValue);
                }}
                className='mt-3 rounded-xl w-48 h-auto text-xl text-black'
                >
                </input>
                <button
                className='bg-red-600 rounded-2xl py-1 px-2 ml-2 text-xl text-amber-50'
                onClick={(e)=>{
                    e.preventDefault()
                    dispatch(receiveVal(buttn))
                }}
                >
                    Submit
                </button>
            </div>
        </div>
    </>
    )
}

export default Header