import styled from 'styled-components';

interface width {
  width: string;
}

// the container that holds the contemt of company admin and user management
export const ContentStyle = styled.div<width>`
  right: 0;
  position: absolute;
  background-color: #eee;
  width: ${({ width }) => width};
  height: 100%;
  overflow-x: scroll;
  margin-bottom: 3rem;

  @media screen and (max-width: 999px) {
    width: 100%;
  }
`;

// the container that holds the navigator bar and its content
export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: auto;
`;
