import React from 'react';
import ProductCard from './ProductCard';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const productsData = [
    {
        img:"${publicRuntimeConfig.basePath}/jacket-1.jpg",
        titles:"Jacket",
        desc: "MEN Yarn Fleece Full-Zip Jacket",
        rating: 4,
        price: "45.00",
    },
    {
        img:"${publicRuntimeConfig.basePath}/skirt-1.jpg",
        titles:"Skirt",
        desc: "BLack Floral Wrap Midi Skirt",
        rating: 5,
        price: "55.00",
    },
    {
        img:"${publicRuntimeConfig.basePath}/party-wear-1.jpg",
        titles:"Party Wear",
        desc: "Women's Party Wear Shoes",
        rating: 3,
        price: "25.00",
    },
    {
        img:"${publicRuntimeConfig.basePath}/shirt-1.jpg",
        titles:"Shirt",
        desc: "Pure Garment Dyed Cotton Shirt",
        rating: 4,
        price: "45.00",
    },
    {
        img:"${publicRuntimeConfig.basePath}/sports-1.jpg",
        titles:"Sports",
        desc: "Trekking & Running Shoes - Black",
        rating: 3,
        price: "58.00",
    },
    {
        img:"${publicRuntimeConfig.basePath}/watch-1.jpg",
        titles:"Watches",
        desc: "Smart Watches Vital Plus",
        rating: 4,
        price: "100.00",
    },
    {
        img:"${publicRuntimeConfig.basePath}/watch-2.jpg",
        titles:"Watches",
        desc: "Pocket Watch Leather Pouch",
        rating: 4,
        price: "120.00",
    },
]

const NewProducts = () => {
  return <div>
    <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4'>New Products</h2>

        <div className='grid gridl-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
            {
                productsData.map((item,index)=>{
                    return (
                        <ProductCard
                        key={index}
                        img={item.img}
                        titles={item.titles}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                        />
                    );
                })
            }
        </div>
    </div>
  </div>;
};

export default NewProducts;