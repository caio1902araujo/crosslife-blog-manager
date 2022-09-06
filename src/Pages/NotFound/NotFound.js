import React from 'react';

import Warning from '../../Components/Warning/Warning';
import Header from '../../Components/Header/Header';

const NotFound = () => {
  return (
    <>
      <Header />
      <div style={{marginTop: '3.75rem'}}>
        <Warning title='Error: 404' description='Parece que não foi possível achar nenhuma página correspondente.' svg='error'/>
      </div>
    </>
  )
}

export default NotFound