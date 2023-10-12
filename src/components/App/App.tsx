import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Main } from '../Main';
import './App.css';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};
