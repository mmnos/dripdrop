import React from 'react';

export const Search = () => {
  console.log('search component');

  return (
    <React.Fragment>
      <input
        className="
            rounded-full
            focus:outline-none
            focus:ring
            focus:ring-black-500
            pl-4
            boxContent h-10 w-80
            placeholder-gray-500
            focus:placeholder-opacity-0
          "
        placeholder="Enter ZIP Code"
        type="search"
      />
      <button
        type="submit"
        className="
          text-white
            relative
            right-14
            bottom-0
            bg-blue-500
            hover:bg-blue-300
            font-medium
            rounded-full text-sm px-3 py-1
          "
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
    </React.Fragment>
  );
};
