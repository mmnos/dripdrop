import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

export const Main = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['zipCodeData'],
    queryFn: async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=90210,us&appid=${process.env.REACT_APP_API_KEY}`
      );
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    },
  });

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  if (isError) return 'Uh-Oh, it looks like something went wrong. :(';
  if (isLoading) return 'Loading...';

  return (
    <div className="bg-blue-300 p-5">
      <h1 className="text-5xl font-bold font-bangers">DripDrop</h1>
      <form action="" className="peer relative z-10 w-max mx-auto">
        <input
          className="rounded-full hover:ring
          focus:outline-none
          focus:ring
          focus:ring-black-500 pl-4
          boxContent h-10 w-80"
          placeholder="Enter ZIP Code"
          type="search"
        />
        <button>Hello</button>
      </form>
    </div>
  );
};
