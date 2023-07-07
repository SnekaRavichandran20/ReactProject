import Logo from '../../Assets/propel.png';
import axios from 'axios';

// the initial color value
const color = {
  colorvalue: [
    {
      name: 'Primary Color',
      value: window.localStorage.getItem('primary'),
    },
    {
      name: 'Secondary Color',
      value: window.localStorage.getItem('secondary'),
    },
    {
      name: 'Font Color',
      value: window.localStorage.getItem('font'),
    },
  ],
  logo: {
    source: window.localStorage.getItem('image'),
    alternate: 'Company Logo',
    width: '50px',
  },
  changingcolorvalue: [
    {
      value: window.localStorage.getItem('primary'),
    },
    {
      value: window.localStorage.getItem('secondary'),
    },
    {
      value: window.localStorage.getItem('font'),
    },
  ],
};

// iVB - png  // /9j- jpg //PHN - svg

const reducer = (state = color, action: any) => {
  // for updating the color
  if (action.type === 'update') {
    return { ...state, colorvalue: action.value };
  }
  // for restoring the default color
  else if (action.type === 'restore') {
    var updatevalue = [
      {
        name: 'Primary Color',
        value: '#00467F',
      },
      {
        name: 'Secondary Color',
        value: '#069AD9',
      },
      {
        name: 'Font Color',
        value: '#000000',
      },
    ];
    let source = {
      source: Logo,
      alternate: 'Company Logo',
      width: '50px',
    };
    var changingcolorvalue = [
      {
        value: '#00467F',
      },
      {
        value: '#069AD9',
      },
      {
        value: '#000000',
      },
    ];
    window.localStorage.setItem('image', Logo);
    window.localStorage.setItem('primary', '#00467F');
    window.localStorage.setItem('secondary', '#069AD9');
    window.localStorage.setItem('font', '#000000');
    let formData = new FormData();
    console.log(Logo);
    formData.append('image', Logo);
    let id = window.localStorage.getItem('id');
    axios
      .post(process.env.REACT_APP_BASE_URL + '/restore/' + id,{
        headers: {
          Accept: '*',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'image/jpeg',
        },
      })
      .then((response) => {});
    return {
      ...state,
      colorvalue: updatevalue,
      logo: source,
      changingcolorvalue: changingcolorvalue,
    };
  }
  //  for logo uploading
  else if (action.type === 'logoupload') {
    let id = window.localStorage.getItem('id');
    let formData = new FormData();
    formData.append('image', action.value);

    axios
      .post(process.env.REACT_APP_BASE_URL + '/custom-logo/' + id, formData, {
        headers: {
          Accept: '*',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'image/jpeg',
        },
      })
      .then((response) => {});

      let url = URL.createObjectURL(action.value);
    window.localStorage.setItem('image', url);

    let source = {
      source: url,
      alternate: 'Company Logo',
      width: '50px',
    };
    return { ...state, logo: source };

  }
  //  initializing the logo
  else if (action.type === 'logosetup') {
    var source = {
      source: action.value,
      alternate: 'Company Logo',
      width: '50px',
    };
    return { ...state, logo: source };
  }
  //  the onchange handler for particular color
  else if (action.type === 'coloronchange') {
    var updatedValue = state.changingcolorvalue;
    updatedValue[action.value.index].value = action.value.value;
    return { ...state, changingcolorvalue: updatedValue };
  }
  // for updating the color
  else if (action.type === 'customizecolor') {
    let sendingdata = {
      primarycolor: state.changingcolorvalue[0].value,
      secondarycolor: state.changingcolorvalue[1].value,
      fontcolor: state.changingcolorvalue[2].value,
    };

    let id = window.localStorage.getItem('id');

    axios
      .post(process.env.REACT_APP_BASE_URL + '/custom-ui/' + id, sendingdata, {
        headers: {
          Accept: '*',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        // console.log('customize', response);
      })
      .catch((err) => {
        // console.log('error', err);
      });
    let updatedValue = state.colorvalue;
    updatedValue[0].value = state.changingcolorvalue[0].value;
    updatedValue[1].value = state.changingcolorvalue[1].value;
    updatedValue[2].value = state.changingcolorvalue[2].value;
    window.localStorage.setItem(
      'primary',
      updatedValue[0].value != null ? updatedValue[0].value : '#fff'
    );
    window.localStorage.setItem(
      'secondary',
      updatedValue[1].value != null ? updatedValue[1].value : '#fff'
    );
    window.localStorage.setItem(
      'font',
      updatedValue[2].value != null ? updatedValue[2].value : '#fff'
    );
    return { ...state, colorvalue: updatedValue };
  }
  // initial setup of color
  else if (action.type === 'initialsettingcolor') {
    let updatedValue = state.colorvalue;
    updatedValue[0].value = action.value.primarycolor;
    updatedValue[1].value = action.value.secondarycolor;
    updatedValue[2].value = action.value.fontcolor;

    let updateValue = state.changingcolorvalue;
    updateValue[0].value = action.value.primarycolor;
    updateValue[1].value = action.value.secondarycolor;
    updateValue[2].value = action.value.fontcolor;
    return {
      ...state,
      colorvalue: updatedValue,
      changingcolorvalue: updateValue,
    };
  } else {
    return state;
  }
};

export default reducer;
