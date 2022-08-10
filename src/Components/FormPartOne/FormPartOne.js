import React from 'react';
import PropTypes from 'prop-types';

import HeaderNews from '../HeaderNews/HeaderNews';
import Input from '../Input/Input';

const FormPartOne = ({title, subtitle, paragraph, setPage}) => {
  const buttonSecondaryConfig = {
    content: 'Próximo',
    onClick: () =>{
      if(title.validate() && paragraph.validate()){
        setPage(2);
      }
    }
  }

  const handleResize = ({target}) => {
    target.style.height = 'auto';
    target.style.height = (target.scrollHeight) + 'px';
  } 

  return (
    <>
      <HeaderNews title='Criando notícia' buttonSecondary={buttonSecondaryConfig}/>
      <form>
        <Input label='Título' id='title' type='text'  {...title}/>
        <Input label='Subtítulo' id='subtitle' type='text' {...subtitle}/>
        <Input label='Corpo da notícia' id='paragraph' isBox={true} onInput={handleResize} {...paragraph} />
      </form>
    </>
  )
}

FormPartOne.propTypes = {
  title: PropTypes.object.isRequired,
  subtitle: PropTypes.object.isRequired,
  paragraph: PropTypes.object.isRequired,
  setPage: PropTypes.func.isRequired,
}

export default FormPartOne;
