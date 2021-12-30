import React from 'react';
import HeaderNews from '../HeaderNews/HeaderNews';
import Input from '../Input/Input';
import PropTypes from 'prop-types';

const FormPartOne = ({title, subtitle, paragraph, setPage}) => {
  const buttonSecondaryConfig = {
    content: "Próximo",
    onClick: () =>{
      if(title.validate() && paragraph.validate()){
        setPage(2);
      }
    }
  }

  return (
    <>
      <HeaderNews title="Criando notícia" buttonSecondary={buttonSecondaryConfig}/>
      <form>
        <Input label="Título" id="title" type="text"  {...title}/>
        <Input label="Subtítulo" id="subtitle" type="text" {...subtitle}/>
        <Input label="Corpo da notícia" id="paragraph" isBox={true} {...paragraph}/>
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

export default FormPartOne