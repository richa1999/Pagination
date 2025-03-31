import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const LIMIT = 10;

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchProducts();
    }, [currentPage])

    const fetchProducts = async () => {
        const data = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${LIMIT*currentPage}&select=title,description,category,discountPercentage,thumbnail,price`);
        const json = await data.json();
        console.log(json);
        setProducts(json.products);
        setTotalPages(Math.ceil(json.total / LIMIT));
    }
  return (
   <div>
     <div className='flex flex-wrap'>
        {products.map((product) => <ProductCard key={product.id} {...product} />)}
    </div>
   {currentPage > 0 && <span className='cursor-pointer' onClick={() => setCurrentPage((currentPage) => currentPage-1)}>Prev</span>}
    {Array.from({length: totalPages}, (_, i) => (
        <span key={i} className={`p-5 cursor-pointer ${currentPage === i ? 'font-bold underline' : ''}`} onClick={() => {
            setCurrentPage(i);
        }}>{i + 1}</span>
    ))}
    {currentPage < (totalPages-1) && <span className='cursor-pointer' onClick={() => setCurrentPage((currentPage) => currentPage+1)}>Next</span>}
   </div>
  )
}

export default Pagination