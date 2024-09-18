import React, { useEffect, useState } from 'react'
import Card from './Card';
import { useSelector } from 'react-redux';
function Home() {
  const [product,setProducts]=useState([])
  const category=useSelector(state => state.category.Category)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'https://fakestoreapi.com/products'; 
        if (category === 'Men') {
          url = 'https://fakestoreapi.com/products/category/men\'s clothing';
        } else if (category === 'Women') {
          url = 'https://fakestoreapi.com/products/category/women\'s clothing';
        } else if (category === 'Accessories') {
          url = 'https://fakestoreapi.com/products/category/jewelery';   
        }

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className='main '>
        <div className="banner bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 flex items-center justify-between p-6">
            <div className="banner-text w-1/2 text-white">
                <h1 className="text-4xl font-bold mb-4">Welcome to Style Hub</h1>
                <p className="text-lg">Discover the latest trends and exclusive offers just for you!</p>
            </div>
            <div className="banner-image w-1/2 flex justify-end">
                <img src="/banner.jpg" alt="Banner Image" className="w-3/4 h-auto object-cover mr-5" />
            </div>
        </div>
        <div className="products flex flex-wrap gap-6 p-4 justify-around">
                {product.map(product => (
                    <Card key={product.id} product={product} />
                ))}
        </div>
    </div>
  )
}

export default Home