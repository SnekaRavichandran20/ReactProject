import React from 'react';
import { Image } from '../Image/Image';
import FilterIcon from '../../../Assets/filter.svg';
import DropIcon from '../../../Assets/drop.svg';
import { StyledFilter, Span } from './FilterStyle';

const image: ImageProp[] = [
  {
    source: FilterIcon,
    alternate: 'Filter Icon',
    width: '16rem',
  },
  {
    source: DropIcon,
    alternate: 'Drop Icon',
    width: '10rem',
  },
];

interface Props {
  toggleHandler: any;
}

const filter: React.FC<Props> = ({ toggleHandler }) => {
  return (
    <StyledFilter onClick={toggleHandler}>
      <Span>
        <Image image={image[0]} />
      </Span>
      <Span>Filters</Span>
      <Span>
        <Image image={image[1]} />
      </Span>
    </StyledFilter>
  );
};

export default filter;
