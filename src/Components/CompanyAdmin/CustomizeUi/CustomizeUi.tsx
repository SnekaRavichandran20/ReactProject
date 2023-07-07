// the content of customize ui page

import React, { useState } from 'react';
import Button from '../../Ui/Button/Button';
import {
  Heading,
  SubHeading,
  ImageContainer,
  SelectButton,
  ImagePreview,
  WrappedContainer,
  FileUpload,
  Canvas,
  ColorBox,
  ColorInput,
  CodeInput,
  ColorContainer,
  RestoreButton,
  NotificationModal,
} from './CustomizeUiStyle';
import { connect, useDispatch, useSelector } from 'react-redux';
import customize from '../../../store/customize/customize';

interface colorProps {
  name: string;
  value: string;
}

const CustomizeUI = () => {
  const c = useSelector((state: any) => state.cus);

  // the onChnage handler for color changing
  const colorHandler = (index: number) => (e: any) => {
    dispatch({
      type: 'coloronchange',
      value: { index: index, value: e.target.value },
    });
  };

  // to trigger the input of image
  const input = React.createRef<HTMLInputElement>();
  const UploadFile = () => {
    input?.current?.click();
  };

  const [source, setSource] = useState('');
  const [image, setImage] = useState('');
  const [notification, setNotification] = useState('');

  const [url, seturl] = useState('');

  // for showing the selected the image name
  const showFileName = (e: any) => {
    const file: File = e.target.files[0];
    var pattern = /image-*/;

    seturl(e.target.files[0]);

    if (!file.type.match(pattern)) {
      setNotification('Data selected is in invalid format');
      setTimeout(() => setNotification(''), 1000);
    } else {
      setImage('> ' + e.target.files[0].name);
      setSource(URL.createObjectURL(e.target.files[0]));
    }
  };
  const dispatch = useDispatch();

  // for cancelling the selected images
  const restore = () => {
    setImage('');
    setSource('');
  };

  // for restoring the default color of the page
  const restoreColor = () => {
    dispatch({ type: 'restore' });
  };

  //  for making the selected image as logo
  const logUploader = () => {
    console.log(source);
    let formData = new FormData();
    formData.append('image', url);
    dispatch({ type: 'logoupload', value: url });
    // dispatch({ type: 'logoupload', value: source });
    setImage('');
    setSource('');
  };

  return (
    <div>
      <Heading color={c.colorvalue[2].value}>Customize UI</Heading>
      <SubHeading color={c.colorvalue[2].value}>Select Company Logo</SubHeading>
      {notification !== '' ? (
        <NotificationModal>{notification}</NotificationModal>
      ) : (
        ''
      )}
      <ImageContainer>
        <p>File Upload {image}</p>

        {/* A preview container where selected image has been viewed */}
        <ImagePreview>
          <FileUpload
            type="file"
            value=""
            ref={input}
            accept="image/*"
            onChange={showFileName}
            name="file"
          />
          {image === '' ? (
            <SelectButton onClick={UploadFile}>
              Click here to select logo
            </SelectButton>
          ) : (
            <img id="output" src={source} alt="" />
          )}
        </ImagePreview>
      </ImageContainer>

      {/* for image controlling option */}
      <WrappedContainer>
        <Button
          width="auto"
          padding=".5rem"
          color={c.colorvalue[1].value}
          hoverColor={c.colorvalue[0].value}
          onClick={logUploader}
        >
          Set Company Logo
        </Button>
        <RestoreButton onClick={restore}>Cancel</RestoreButton>
      </WrappedContainer>

      <SubHeading color={c.colorvalue[2].value}>Select Color</SubHeading>

      {/* the canvas for color */}
      <ColorContainer>
        {c.colorvalue.map((color: colorProps, index: number) => {
          return (
            <ColorBox key={color.name}>
              <p>{color.name}</p>
              <Canvas>
                <ColorInput
                  type="color"
                  value={c.changingcolorvalue[index].value}
                  onChange={colorHandler(index)}
                />
                <CodeInput
                  type="text"
                  value={c.changingcolorvalue[index].value}
                />
              </Canvas>
            </ColorBox>
          );
        })}
      </ColorContainer>

      {/* color manipulating option */}
      <WrappedContainer>
        <Button
          width="auto"
          padding=".5rem"
          color={c.colorvalue[1].value}
          hoverColor={c.colorvalue[0].value}
          onClick={() => dispatch({ type: 'customizecolor' })}
        >
          Save Changes
        </Button>
        <RestoreButton onClick={restoreColor}>Restore Default</RestoreButton>
      </WrappedContainer>
    </div>
  );
};

const mapStateToProps = (state: { cus: { color: any } }) => {
  return {
    c: state.cus.color,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    cc: () => dispatch(customize),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeUI);
