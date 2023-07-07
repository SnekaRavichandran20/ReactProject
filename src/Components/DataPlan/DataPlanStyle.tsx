import styled from 'styled-components';

export const DataTable = styled.div`
margin-bottom: 1rem;
@media screen and (max-width: 999px) {
  overflow-x: scroll;
  margin-bottom: 2rem;
}
`;

// styling the historic subscription table
export const Table = styled.table`
  border-collapse: collapse;
  border: 0.1rem solid #ddd;
  width: 100%;
  margin-top: 1.5rem;
`;

export const Header = styled.tr`
  border-bottom: 0.1rem solid #ddd;
`;

// styling the cells of the table
export const Td = styled.td`
padding: 1rem 2rem;
font-size: 0.8rem;
white-space: nowrap;
`;

export const HeaderTd = styled(Td)`
font-size: 0.9rem;
`;

export const Expired = styled(Td)`
  color: #ff0000;
`;

// styling the row when there occurs no match
export const NoMatch = styled(Td)`
  color: #ff0000;
  text-align: center;
`;
