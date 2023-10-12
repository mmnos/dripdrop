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
      <h1 className="text-3xl font-bold font-roboto">DripDrop</h1>
      <input name="myInput" />
      <button>Hello</button>
    </div>
  );
};
