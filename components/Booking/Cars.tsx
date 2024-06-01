import { DirectionDataContext } from '@/context/DirectionDataContext';
import { SelectedCarAmount } from '@/context/SelectedCarAmount';
import CarsList from '@/data/CarsList';
import Image from 'next/image';
import React, { useContext, useState } from 'react';

const Cars = () => {
  const [selectedCars, setSelectedCar] = useState<any>();

  const { directionData, setDirectionData } = useContext(DirectionDataContext);
  const { carAmount, setCarAmount } = useContext(SelectedCarAmount);

  console.log(directionData);

  const getCost = (charges: any) => {
    return (
      charges *
      directionData.routes[0].distance *
      0.000621371192
    ).toFixed(2);
  };
  return (
    <div className='mt-4'>
      <h2 className='font-bold'>Select Car</h2>
      <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
        {CarsList.map((item, index) => (
          <div
            key={index}
            className={`m-2 p-2 border-[1px] rounded-md hover:border-yellow-500 cursor-pointer ${
              index == selectedCars ? 'border-yellow-400 border-[2px]' : null
            }`}
            onClick={() => {
              setSelectedCar(index);
              setCarAmount(getCost(item.charges));
            }}
          >
            <Image
              className='w-full'
              src={item.image}
              width={75}
              height={90}
              alt={item.name}
            />
            <div className='flex justify-between mt-2'>
              <h2 className='text-[15px] text-gray-500'>{item.name}</h2>
              {directionData.routes ? (
                <span className='text-[15px] text-black'>
                  {getCost(item.charges)}$
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
