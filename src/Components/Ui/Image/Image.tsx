import React from "react";

interface ImageProp  {
  source: string;
  alternate: string;
  width: string;
};

interface Props {
  image: ImageProp;
  clicked?: any;
  toggle?: boolean;
  navigation?: boolean;
}

export const Image: React.FC<Props> = ({ image, clicked, toggle,navigation }) => {
  return (
    <img src={image.source} alt={image.alternate} height={image.width} onClick={clicked}/>
  );
};
