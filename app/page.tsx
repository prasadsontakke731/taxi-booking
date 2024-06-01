'use client';
import Booking from '@/components/Booking/Booking';
import MapBoxMap from '@/components/Map/MapBoxMap';
import { UserLocationContext } from '@/context/UserLocationContext';
import { useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { SourceCordiContext } from '@/context/SourceCordiContext';
import { DestinationCordiContext } from '@/context/DestinationCordiContext';
import { DirectionDataContext } from '@/context/DirectionDataContext';
import { SelectedCarAmount } from '@/context/SelectedCarAmount';

export default function Home() {
  const [userLocation, setUserLocation] = useState<any>();
  const [directionData, setDirectionData] = useState<any>([]);

  const [soruceCordinates, setSourceCordinates] = useState<any>([]);
  const [destinationCordinates, setDestinationCordinates] = useState<any>([]);
  const [carAmount, setCarAmount] = useState<any>();

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lng: pos.coords.longitude,
        lat: pos.coords.latitude,
      });
    });
  };

  useEffect(() => {
    getUserLocation();
  }, []);
  return (
    <div>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SourceCordiContext.Provider
          value={{ soruceCordinates, setSourceCordinates }}
        >
          <DestinationCordiContext.Provider
            value={{ destinationCordinates, setDestinationCordinates }}
          >
            <DirectionDataContext.Provider
              value={{ directionData, setDirectionData }}
            >
              <SelectedCarAmount.Provider value={{ carAmount, setCarAmount }}>
                <div className='grid grid-cols-1 md:grid-cols-3 '>
                  <div>
                    <Booking />
                  </div>
                  <div className='col-span-2'>
                    <MapBoxMap />
                  </div>
                </div>
              </SelectedCarAmount.Provider>
            </DirectionDataContext.Provider>
          </DestinationCordiContext.Provider>
        </SourceCordiContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}
