import React from 'react'

const ProductCard = ({title,description,category,discountPercentage,thumbnail,price}) => {
  return (
    <div className='w-auto h-auto bg-white shadow-md rounded-lg p-4 m-2 border border-gray-500'>
        <img src={thumbnail} alt={title} className='object-contain w-full h-60'/>
        <h2 className='font-bold'>{title}</h2>
        <p className='text-sm w-96'>{description}</p>
        <p className='text-sm'>{category}</p>
        <p>${price} - {discountPercentage}% off</p>
    </div>
  )
}

export default ProductCard