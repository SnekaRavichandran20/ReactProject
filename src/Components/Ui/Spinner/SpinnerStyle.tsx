import styled, {keyframes} from 'styled-components';

export const Loader = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  margin: 35%;
  margin-bottom: 0;
`;

export const LoadingAnimation = keyframes`
    0% {
      height: 144px;
      align-self: center;
    }
    50%,
    100% {
      height: 50px;
      align-self: center;
    }

`;

export const LoaderChild = styled.div`

  width: 10px;
  height: 30px;
  margin: 0 .5rem;
  background: #0000ff;
  animation: ${LoadingAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

  `;

export const LoaderChildone = styled(LoaderChild)`
animation-delay: -0.24s;

`;

export const LoaderChildtwo = styled(LoaderChild)`
animation-delay: -0.12s;
`;

export const LoaderChildthree = styled(LoaderChild)`
animation-delay: 0s;
`;
