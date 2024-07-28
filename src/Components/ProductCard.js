import Image from 'next/image';
import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const ProductCard = ({ img, titles, desc, rating, price }) => {
  
  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
      <div>
        <Image className='w-full h-auto' src={`${publicRuntimeConfig.basePath}${img}`} width={200} height={300} alt={titles} />
      </div>
      <div className='space-y-2 py-2'>
        <h2 className='text-accent font-medium uppercase'>{titles}</h2>
        <p className='text-gray-500 max-w-[150px]'>{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className='font-bold flex gap-4'>
          ${price}
          <del className='text-gray-500 font-normal'>${parseInt(price) + 50}.00</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
