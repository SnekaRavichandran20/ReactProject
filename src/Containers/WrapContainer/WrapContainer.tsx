import { StyledWrappedContainer } from './WrapContainerStyle';

interface Props {
  children?: React.ReactNode;
}

// the container for flex wrap
const wrapContainer: React.FC<Props> = ({ children }) => {
  return <StyledWrappedContainer>{children}</StyledWrappedContainer>;
};

export default wrapContainer;
