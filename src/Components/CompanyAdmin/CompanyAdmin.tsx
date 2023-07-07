// the content of company admin page

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Heading,
  TabForContent,
  NavigationLink,
  AdminContent,
  Content,
} from './CompanyAdminStyle';
import CustomizeUi from './CustomizeUi/CustomizeUi';
import Subscription from './Subscription/Subscription';
import { useSelector } from 'react-redux';

interface Props {
  active: any;
}

const CompanyAdmin: React.FC<Props> = ({
  active,
}) => {
  const c = useSelector((state: any) => state.cus);

  return (
    <Content>
      <Heading color={c.colorvalue[2].value}>Company Admin</Heading>
      <TabForContent>
        <NavigationLink to="/home/admin/sub">Subscriptions</NavigationLink>
        <NavigationLink to="/home/admin/ui" onClick={active}>
          Customize UI
        </NavigationLink>
      </TabForContent>
      <AdminContent>
        <Routes>
          <Route path="/sub" element={<Subscription />} />
          <Route
            path="/ui"
            element={<CustomizeUi/>}
          />
        </Routes>
      </AdminContent>
    </Content>
  );
};

export default CompanyAdmin;
