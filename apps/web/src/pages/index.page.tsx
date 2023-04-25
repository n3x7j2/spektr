import Router from 'next/router';
import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    Router.push('/projects/all/overview');
  }, []);
  return <>Home Page</>;
};

export default HomePage;
