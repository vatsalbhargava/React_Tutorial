import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/ClassQuery';
import TermPage from './components/TermPage';
const queryClient = new QueryClient();
import Dispatcher from './components/Dispatcher'
import { useDbData } from './utilities/firebase';


const App = () => {
  const [ data, error ] = useDbData('/')
  if (error) {
    console.log(error);
    return;
  }

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (data === undefined) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return(
      <div className='app-container'>
        <Banner AppTitle={data.title}/>
        <Dispatcher courses={data.courses}/>
      </div>
  );
};


export default () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);