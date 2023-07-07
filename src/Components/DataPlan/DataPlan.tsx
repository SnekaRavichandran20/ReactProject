// the table for historic subscription table

import React from 'react';
import PaidTrail from '../Ui/PaidTrail/Paid';
import Status from '../Ui/Status/Status';
import DataPlans from '../../Data/DataPlan.json';
import {
  Table,
  Header,
  Td,
  NoMatch,
  DataTable,
  HeaderTd,
} from './DataPlanStyle';

interface Props {
  searchValue: string;
  filterValue: string;
}

const dataPlan: React.FC<Props> = ({ searchValue, filterValue }) => {
  // the table content for historic subscription table
  let data = DataPlans.map((plan) => {
    return plan.SubscriptionInfo.toLowerCase().indexOf(searchValue) > -1 &&
      (plan.Status.toLowerCase() === filterValue || filterValue === '') ? (
      <tr key={plan.SubscriptionInfo}>
        <Td>
          {plan.SubscriptionInfo}{' '}
          <PaidTrail>{plan.Info ? 'Paid' : 'Trail'}</PaidTrail>
        </Td>
        <Td>
          <Status status={plan.Status}></Status>
        </Td>
        <Td>{plan.CreatedOn}</Td>
        <Td>{plan.ExpiryDate}</Td>
        <Td>{plan.Price}</Td>
      </tr>
    ) : (
      ''
    );
  });

  // while searching or filter to indicate that no match found
  let unfound = false;
  data.map((plan) => {
    unfound = unfound || plan !== '';
    return 0;
  });

  return (
    <DataTable>
      <Table>
        <thead>
          <tr>
            <HeaderTd colSpan={5}>Historic Subscriptions</HeaderTd>
          </tr>
          <Header>
            <HeaderTd>Subscription Info</HeaderTd>
            <HeaderTd>Status</HeaderTd>
            <HeaderTd>Created On</HeaderTd>
            <HeaderTd>Expiry Date</HeaderTd>
            <HeaderTd>Price</HeaderTd>
          </Header>
        </thead>
        <tbody>
          {data}
          {!unfound ? (
            <tr>
              <NoMatch colSpan={5}>No data found</NoMatch>
            </tr>
          ) : (
            <tr></tr>
          )}
        </tbody>
      </Table>
    </DataTable>
  );
};

export default dataPlan;
