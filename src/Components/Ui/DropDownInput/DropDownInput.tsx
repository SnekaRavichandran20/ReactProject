import React, {useState} from 'react';
import { InputField, Option, OptionField } from './DropDownInputStyle';
import DropIcon from '../../../Assets/drop.svg';
import { Image } from '../Image/Image';

interface Props {
  handler: any;
}


const image: ImageProp =
  {
    source: DropIcon,
    alternate: 'Drop Icon',
    width: '10rem',
  };

const   DropDownInput: React.FC<Props> = ({ handler }) => {
  const [value, setValue] = useState('');
  const [option, setOption] = useState(false);
  const optionhandler = (optionvalue: string) => {
    setValue(optionvalue);
    handler(optionvalue);
    setOption(!option)
  }
  return (
    <div>
    <InputField onClick={() => setOption(!option)}>
      <span>{value === '' ? 'User Status' : value}</span>
      <span> <Image image={image} /></span>

    </InputField>
    <OptionField>
    {option ? 
    <><Option onClick={() => optionhandler('Active')}>Active</Option><Option onClick={() => optionhandler('Inactive')}>Inactive</Option></> : '' }
</OptionField>
    </div>
  );
};

export default DropDownInput;
