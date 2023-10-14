import React from 'react';
import './Main.css';
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
      <div className="bg-dd-light-blue h-dd-view-height flex items-center justify-center">
        <input
          className="
              rounded-full
              focus:outline-none
              focus:ring
              focus:ring-black-500 pl-4
              boxContent h-10 w-80
            placeholder-gray-500
              focus:placeholder-opacity-0"
          placeholder="Enter ZIP Code"
          type="search"
        />
        <button
          type="submit"
          className="text-white
          relative
          right-14
          bottom-0 bg-blue-500
           hover:bg-blue-300
           font-medium
           rounded-full text-sm px-3 py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>

        {/* <button
          className="bg-blue-400 hover:bg-blue-300
         text-white font-bold py-1 px-2 rounded-full"
        >
          Yolo
        </button> */}
        {/* </form> */}
      </div>
      <WeatherCard />
    </React.Fragment>
  );
};
