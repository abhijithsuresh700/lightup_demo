import { useState } from 'react';
import DataSource from '@/components/dataSource/DataSource';
import Header from '@/components/header/Header';
import React from 'react';

const Home = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <Header active={active} onClick={setActive}/>
      <DataSource active={active} />
    </>
  );
};

export default Home;
