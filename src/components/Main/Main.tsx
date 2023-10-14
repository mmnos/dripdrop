import React from 'react';
// import React, { useEffect } from 'react';
// import { useQuery } from '@tanstack/react-query';
import dripDropLogo from '../../assets/images/DripDropImage.jpg';
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
      <div className="flex items-center justify-center">
        <img alt="dripDropLogo" width="100" height="100" src={dripDropLogo} />
      </div>
      <div className="bg-dd-light-blue h-dd-view-height flex items-center justify-center wrapper">
        <input
          className="
              rounded-full hover:ring
              focus:outline-none
              focus:ring
              focus:ring-black-500 pl-4
              boxContent h-10 w-80"
          placeholder="Enter ZIP Code"
          type="search"
        />
        <button>Search</button>
      </div>
      <WeatherCard />
    </React.Fragment>
  );
};
