import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import Login from '../Login/Login';

function Page() {
  return (
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home/*" element={<Home />}/>

      </Routes>
  );
}

export default Page;

