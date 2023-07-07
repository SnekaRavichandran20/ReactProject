import React from 'react';
import PaidTrail from '../Ui/PaidTrail/Paid';
import Status from '../Ui/Status/Status';

import {
  Table,
  Header,
  Td,
  Date,
  DataContainer,
  WrapContainer,
  Usage,
  UsedData,
  TestData,
  Total,
  SubscriptionTable,
  HeaderTd
} from './SubscriptionInfoStyle';

// the subscription info table of the subscription page
const subscriptionInfo = () => (
  <SubscriptionTable>
  <Table>
    <thead>
      <Header>
        <HeaderTd>Subscription Info</HeaderTd>
        <HeaderTd>Status</HeaderTd>
        <HeaderTd>Created On</HeaderTd>
        <HeaderTd>Expiry Date</HeaderTd>
        <HeaderTd>Price</HeaderTd>
      </Header>
    </thead>
    <tbody>
      <tr>
        <Td>
          Super Saver Pack <PaidTrail>Paid</PaidTrail>
        </Td>
        <Td>
          <Status status="Active"></Status>
        </Td>
        <Td>14 Nov 2020</Td>
        <Date>14 Dec 2020</Date>
        <Td>$140</Td>
      </tr>
      <tr>
        <Td colSpan={5}>
          {/* <!-- for the data range bar --> */}
          <WrapContainer>
            <DataContainer>
              <Table>
                <tbody>
                  <tr>
                    <Td colSpan={2}>Data Usage</Td>
                  </tr>
                  <tr>
                    <Td colSpan={2}>
                      <Usage>
                        <UsedData>a</UsedData>
                      </Usage>
                    </Td>
                  </tr>
                  <tr>
                    <Td>Used : 500mb</Td>
                    <Total>Total : 1Gb</Total>
                  </tr>
                </tbody>
              </Table>
            </DataContainer>

            <DataContainer>
              <Table>
                <tbody>
                  <tr>
                    <Td colSpan={2}>Test Done</Td>
                  </tr>
                  <tr>
                    <Td colSpan={2}>
                      <Usage>
                        <TestData>a</TestData>
                      </Usage>
                    </Td>
                  </tr>
                  <tr>
                    <Td>Used : 20 Test</Td>
                    <Total>Total : 25 Test</Total>
                  </tr>
                </tbody>
              </Table>
            </DataContainer>
          </WrapContainer>
        </Td>
      </tr>
    </tbody>
  </Table>
  </SubscriptionTable>
);

export default subscriptionInfo;

export {};
