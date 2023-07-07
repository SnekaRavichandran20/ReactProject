import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CompanyAdmin from '../../Components/CompanyAdmin/CompanyAdmin';
import UserManagement from '../../Components/UserManagement/UserManagement';
import Layout from '../../Containers/Layout/Layout';


const Home = () => {
  const [url, seturl] = useState(window.location.href);

  const activehandler = () => {
    seturl(window.location.href);
  };

  const [admin, setAdmin] = useState(
    window.location.href.indexOf('admin') > -1
  );

  const adminhandler = (name: string) => {
    setAdmin(name === 'Company Admin');
  };

  return (
    <Layout url={url} admin={admin} adminHandler={adminhandler}>
      <Routes>
        <Route
          path="/admin/*"
          element={
            <CompanyAdmin
              active={activehandler}
            />
          }
        />
        <Route path="/user" element={<UserManagement />} />
        {/* for redirecting to the home admin subscription page */}
        <Route path="/" element={<Navigate replace to="/home/admin/sub" />} />
      </Routes>
    </Layout>
  );
};

export default Home;
