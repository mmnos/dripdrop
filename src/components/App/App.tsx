import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Main } from '../Main';
import './App.css';

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 60000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};
