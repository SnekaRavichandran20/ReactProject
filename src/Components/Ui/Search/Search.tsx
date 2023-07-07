import React from "react";
import { Image } from "../Image/Image";
import InputContainer from "../InputContainer/InputContainer";
import SeacrhIcon from "../../../Assets/search.svg";
import { InputField, Span, ImageSpan } from "./SearchStyle";

const image: ImageProp = {
    source: SeacrhIcon,
    alternate: "Search Icon",
    width: "25px"
}

interface Props {
    onKeyUp?: any;
    value?: string;
    width? : string;
}

const search: React.FC<Props> = ({ onKeyUp,width, value, ...props }) => (
    <InputContainer width={width}>
        <ImageSpan><Image image={image}></Image></ImageSpan>
        <Span><InputField type="text" placeholder="Search" onChange={onKeyUp}></InputField></Span>
    </InputContainer>
)

export default search;