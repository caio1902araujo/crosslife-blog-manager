import React from 'react';
import PropTypes from 'prop-types';

import HeaderNews from '../HeaderNews/HeaderNews';
import Input from '../Input/Input';

const FormNewsPartOne = ({title, subtitle, paragraph, headerTitle, setPage}) => {

  const buttonSecondaryConfig = {
    content: 'Próximo',
    onClick: () => {
      if(title.validate() && paragraph.validate()){
        setPage(2);
      }
    }
  }

  const handleResize = () => {
    const textbox = document.querySelector('#paragraph');
    textbox.style.height = 'auto';
    textbox.style.height = (textbox.scrollHeight) + 'px';
  }

  React.useEffect(()=>{
    handleResize();
  }, [paragraph.value])

  return (
    <>
      <HeaderNews title={headerTitle} buttonSecondary={buttonSecondaryConfig}/>
      <form>
        <Input 
          label='Título' 
          id='title' 
          type='text' 
          error={title.error} 
          value={title.value} 
          onChange={title.onChange} 
          onBlur={title.onBlur}
        />

        <Input 
          label='Subtítulo' 
          id='subtitle' 
          type='text' 
          error={subtitle.error} 
          value={subtitle.value} 
          onChange={subtitle.onChange} 
          onBlur={subtitle.onBlur}
        />

        <Input 
          label='Corpo da notícia' 
          id='paragraph' 
          isBox={true} 
          error={paragraph.error} 
          value={paragraph.value} 
          onChange={paragraph.onChange} 
          onBlur={paragraph.onBlur}
        />
      </form>
    </>
  )
}

FormNewsPartOne.propTypes = {
  title: PropTypes.object.isRequired,
  subtitle: PropTypes.object.isRequired,
  paragraph: PropTypes.object.isRequired,
  setPage: PropTypes.func.isRequired,
  headerTitle: PropTypes.string.isRequired,
}

export default FormNewsPartOne;
