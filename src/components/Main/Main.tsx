import React from 'react';
import './Main.css';
// import React, { useEffect } from 'react';
// import { useQuery } from '@tanstack/react-query';
import { Header } from '../Header';
import { Search } from '../Search';
import { WeatherCard } from '../WeatherCard';

export const Main = () => {
  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ['zipCodeData'],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?zip=90210,us&appid=${process.env.REACT_APP_API_KEY}`
  //     );
  //     if (!res.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return res.json();
  //   },
  // });

  // useEffect(() => {
  //   console.log('data', data);
  // }, [data]);

  // if (isError) return 'Uh-Oh, it looks like something went wrong. :(';
  // if (isLoading) return 'Loading...';

  return (
    <React.Fragment>
      <Header />
      <div className="bg-dd-light-blue h-dd-view-height flex items-center justify-center">
        <Search />
      </div>
      <WeatherCard />
    </React.Fragment>
  );
};
