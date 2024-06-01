'use client';
import React, { useContext, useState } from 'react';
import AutoCompleteAddress from './AutoCompleteAddress';
import Cars from './Cars';
import Cards from './Cards';
import { useRouter } from 'next/navigation';
import { SelectedCarAmount } from '@/context/SelectedCarAmount';

const Booking = () => {
  const screenHeight = window.innerHeight * 0.77;
  const { carAmount, setCarAmount } = useContext(SelectedCarAmount);
  const router: any = useRouter();
  return (
    <div className='p-1'>
      <h1 className='text-[20px] font-semibold'>Booking</h1>
      <div className='' style={{ height: screenHeight }}>
        <AutoCompleteAddress />
        <Cars />
        <Cards />
        <button
          className={`w-full bg-yellow-300 p-1 rounded-md mt-4 ${
            !carAmount ? 'bg-gray-300' : null
          }`}
          // disabled={!carAmount}
          onClick={() => router.push('/payment')}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Booking;
