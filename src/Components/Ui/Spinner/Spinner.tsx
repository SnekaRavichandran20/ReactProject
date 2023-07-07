import React from 'react';
import { Loader, LoaderChildone, LoaderChildtwo, LoaderChildthree} from './SpinnerStyle';

const Spinner = () => {
  return (
    <Loader>
      <LoaderChildone></LoaderChildone>
      <LoaderChildtwo></LoaderChildtwo>
      <LoaderChildthree></LoaderChildthree>
    </Loader>
  );
};

export default Spinner;
