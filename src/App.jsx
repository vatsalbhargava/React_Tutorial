import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/ClassQuery';
import TermPage from './components/TermPage';

const queryClient = new QueryClient();

const App = () => {
  const [schedule, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if(isLoading) return <p>Loading...</p>;
  if(error) return <p>Error: {error.message}</p>;

  return(
      <div className='app-container'>
        <Banner AppTitle={schedule.title}/>
        <TermPage courses={schedule.courses}/>
      </div>
  );
};


export default () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);