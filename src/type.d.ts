interface ImageProp {
  source: string;
  alternate: string;
  width: string;
}

interface naviagationItemProps {
  image: Object;
  navigationItemName: string;
  path: string;
}


// login page input data type
type Config = {
  image: {
    source: string;
    alternate: string;
    width: string;
  };
  elementType: string;
  elementConfig: {
    type: string;
    placeholder: string;
  };
  value: string;
  validation: {
    required: boolean;
    isEmail?: boolean;
    minLength?: number;
    maxLength?: number;
  };
  valid: boolean;
  errorMessage: string;
};
