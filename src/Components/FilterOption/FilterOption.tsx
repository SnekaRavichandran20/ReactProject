import React from 'react';
import WrapContainer from '../../Containers/WrapContainer/WrapContainer';
import DropDownInput from '../Ui/DropDownInput/DropDownInput';
import { Button, Hr} from './FilterOptionStyle';

interface Props {
    handler: any;
    valueHandler: any;
}

const filterOption: React.FC<Props> = ({handler, valueHandler}) => {
  return (
    <div>
      <Hr></Hr>
      <WrapContainer>
        <DropDownInput handler={valueHandler}></DropDownInput>
        <Button onClick={handler}>Clear All Filters</Button>
      </WrapContainer>
    </div>
  );
};

export default filterOption;
