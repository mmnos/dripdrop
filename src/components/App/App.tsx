import React from 'react';
import './App.css';

export const App = () => {
  console.log('inside app');
  return (
    <div className="bg-blue-300 p-5">
      <h1 className="text-3xl font-bold underline">DripDrop</h1>
      <input name="myInput" />
      <button>Hello</button>
    </div>
  );
};
