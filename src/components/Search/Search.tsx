import React, { useEffect, useState } from 'react';

interface SearchProps {
  refetch: () => void;
  setShouldGetLatAndLonData: (shouldGetLatAndLonData: boolean) => void;
}

export const Search = ({ refetch, setShouldGetLatAndLonData }: SearchProps) => {
  const [input, setInput] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const onButtonClick = async () => {
    setShouldGetLatAndLonData(true);
    refetch();
    setInput('');
  };
  const onChangeHandler = (value: string) => setInput(value);

  useEffect(() => {
    if (input.length === 5) setIsButtonDisabled(false);
  }, [input]);

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
        maxLength={5}
        onChange={(e) => onChangeHandler((e.target as HTMLInputElement).value)}
        placeholder="Enter ZIP Code"
        type="search"
        value={input}
      />
      <button
        className="
          text-white
            relative
            right-14
            bottom-0
            bg-blue-500
            enabled:hover:bg-blue-300
            font-medium
            rounded-full text-sm px-3 py-1
            disabled:opacity-25
            disabled:cursor-not-allowed
          "
        disabled={isButtonDisabled}
        onClick={() => onButtonClick()}
        type="submit"
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
