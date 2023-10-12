import React from 'react';
import './App.css';

export const App = () => {
  console.log('inside app');
  return (
    <div className="bg-blue-300 p-5">
      <h1 className="text-4xl font-bold  ">DripDrop</h1>

      <form action="" className="peer relative z-10 w-max mx-auto">
        <input
          type="search"
          className="rounded-full hover:ring 
          focus:outline-none 
          focus:ring 
          focus:ring-black-500 pl-4 
          boxContent h-10 w-80 "
        />
      </form>
      <button>Hello</button>
    </div>
  );
};
