import { useState,useEffect } from "react";
import Header from "./components/Header"
import { useSelector } from "react-redux"
import NewsCard from "./components/NewsCard";


function App() {
    const [data,setDate]=useState([])
    const searchValue = useSelector((state) => state.news.searchValue);
    const apiKey=String(import.meta.env.VITE_API_KEY)
    const url = `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${apiKey}`

    const fetchNews=async()=>{
    const rawData= await fetch(url)
    const data= await rawData.json()
    setDate(data["articles"])
    }

    useEffect(() => {
    fetchNews()
    }, [searchValue]);
  // console.log(data);

    return (
    <>
        <Header/>
        <div className="flex flex-wrap">
        {data.map((articles)=>{
        return(
            <NewsCard articles={articles}/>
            )
        })
        }
        </div>
    </>
    )
}

export default App
