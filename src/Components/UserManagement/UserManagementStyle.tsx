import styled from 'styled-components';

interface Props {
  color: string;
  hoverColor?: string;
  disabled?: boolean;
}

// the heading of the heading element of the user management heading
export const Heading = styled.h2<Props>`
  color: ${({ color }) => color};
  margin-top: 2rem;
`;

// to make the table scrollable when screen size is small
export const UserTable = styled.div`
  margin-top: 1rem;
  @media screen and (max-width: 999px) {
    overflow-x: scroll;
  }
`;

// to style the user details table
export const Table = styled.table`
  border-collapse: collapse;
  border: 0.1rem solid #ddd;
  width: 100%;
  background-color: #fff;
`;

// to style the cells of the user details table
export const Td = styled.td`
  max-width: 10rem;
  padding: 1rem 2rem;
  font-size: 0.8rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Tr = styled.tr`
  border-bottom: 0.1rem solid #ccc;
`;

// to style the edit and delete button
export const UpdateButton = styled.button`
  color: #0000ff;
  border: none;
  background-color: inherit;
  cursor: pointer;
  display: inline-flex;
`;

// to style the row when no match occurs
export const NoMatch = styled(Td)`
  color: #ff0000;
  text-align: center;
`;

// to make search and filter option to left and add employee button to right
export const WrappedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// to style the paginate buttons
export const PaginateButton = styled.button<Props>`
  border: none;
  background-color: ${({ color }) => color};
  border-radius: 0.2rem;
  padding: 0.5rem;
  text-align: center;
  color: #fff;
  display: inline-block;
  margin: 0.5rem;
  cursor: pointer;
  margin-bottom: 5rem;

  :hover,
  &.active {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  :disabled {
    background-color: ${({ color }) => color};
    cursor: default;
    opacity: 0.5;
  }
`;

// to style the container that holds the whole content of the user management table
export const UserManage = styled.div`
  padding: 4%;
  padding-top: 0;
`;

// to style the div of success notification after every add, edit, delete action
export const NotificationModal = styled.div`
  background-color: #fff;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  cursor: pointer;
  right: 4%;
  top: 2%;
  position: absolute;
  border: none;
  padding: 1rem;
  z-index: 1;
`;

// to style the modal for delete confirmation
export const DeleteModal = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  position: absolute;
  padding: 1rem;
  font-size: 0.9rem;
  width: 17rem;
  text-align: center;
  transition: 2s ease-in;
`;

export const P = styled.p`
  margin: 2rem 0;
`;

export const DeleteConfirmationModal = styled.div`
  background-color: rgb(0, 0, 0, 0.3);
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Pagination = styled.div`
  text-align: right;
  margin-top: 1rem;
`;

export const UserManagementContent = styled.div`
  @media screen and (max-width: 999px) {
    overflow-y: scroll;
  }
`;
