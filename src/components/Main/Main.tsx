import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Header } from '../Header';
import { Search } from '../Search';
import { WeatherCard } from '../WeatherCard';
import './Main.css';

const fetchLatitudeAndLongitude = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=90210,us&appid=${process.env.REACT_APP_API_KEY}`
  );
  if (!res.ok) {
    throw new Error('Failed to retrieve latitude and longitude data.');
  }
  return res.json();
};

export const Main = () => {
  const [shouldGetLatAndLonData, setShouldGetLatAndLonData] = useState(false);

  const { data, isError, isInitialLoading, isLoading, refetch } = useQuery({
    queryKey: ['latitudeAndLongitudeData'],
    queryFn: fetchLatitudeAndLongitude,
    enabled: shouldGetLatAndLonData,
  });

  useEffect(() => {
    console.log('data', data, isLoading, isInitialLoading, isError);
  }, [data, isLoading, isInitialLoading, isError]);

  if (isError) return 'Uh-Oh, it looks like something went wrong. :(';
  if (isInitialLoading) return 'Loading...';

  return (
    <React.Fragment>
      <Header />
      <div className="bg-dd-light-blue h-dd-view-height flex items-center justify-center">
        <Search
          refetch={refetch}
          setShouldGetLatAndLonData={setShouldGetLatAndLonData}
        />
      </div>
      <WeatherCard />
    </React.Fragment>
  );
};
