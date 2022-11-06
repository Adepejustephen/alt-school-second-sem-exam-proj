import React from 'react'
import { HomeUi } from '../components';
import { FetchUser } from "../hooks";


export const Home = () => {
  const { user, error, loading } = FetchUser();
  return (
    <>
      
      <HomeUi user={user} loading={loading} error={error} />
    </>
  );
};
