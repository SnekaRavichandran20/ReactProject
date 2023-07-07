import styled from 'styled-components';

// to make the table scrollable when screen size is small
export const SubscriptionTable = styled.div`
margin-top: 1rem;
  @media screen and (max-width: 999px) {
    overflow-x: scroll;
  }
`;

// to style the subscription info table
export const Table = styled.table`
  border-collapse: collapse;
  border: 0.1rem solid #ddd;
  width: 100%;
`;

// the header of the table
export const Header = styled.tr`
  border-bottom: 0.1rem solid #ddd;
`;

// to style each cell of the subsription info table
export const Td = styled.td`
max-width: 10rem;
padding: 1rem 2rem;
font-size: 0.8rem;
white-space: nowrap;
overflow: hidden;
`;

export const HeaderTd = styled(Td)`
font-size: 0.9rem;
`;


// to make the date font red
export const Date = styled(Td)`
  color: #ff0000;
`;

// the container of individual range bar
export const DataContainer = styled.span`
  flex: 40%;
  padding: 0rem 2rem;
  @media screen and (max-width: 800px) {
    flex: 0;
  }
`;

// the container that holds the range bar of used data and test done
export const WrapContainer = styled.div`
  background-color: #ddd;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem 0;
`;

// to style the range bar
export const Usage = styled.div`
  border-radius: 4rem;
  background-color: #fff;
  width: 100%;
`;

// the range bar indicator of the used data
export const UsedData = styled.div`
  border-radius: 4rem;
  background-color: #008d00;
  width: 50%;
  color: #008d00;
  height: 3%;
`;

// the range bar indicator of the test done
export const TestData = styled.div`
  border-radius: 4rem;
  background-color: #ff0000;
  width: 75%;
  color: #ff0000;
  height: 3%;
`;

// to make the total data align at right
export const Total = styled(Td)`
  text-align: right;
`;