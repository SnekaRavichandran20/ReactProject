import styled from 'styled-components';

interface Props {
    randomColor: string;
    children?: any;
}

export const Span = styled.span<Props>`
background-color: ${({ randomColor }) => randomColor};
width: 3rem;
padding: .8rem 1rem;
border-radius: 50%;
color: #fff;
margin-right: 1rem;
`;