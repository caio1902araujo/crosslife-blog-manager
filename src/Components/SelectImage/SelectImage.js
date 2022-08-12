import React from 'react';
import PropTypes from 'prop-types';

import ButtonSecondary from '../Button/ButtonSecondary';
import InputFile from '../InputFile/InputFile';

import styles from './SelectImage.module.css';

const SelectImage = ({setImage}) => {
  const inputFileRef = React.useRef();

  const handleChange = ({target}) => {
    const file = target.files[0];
    setImage({
      url: URL.createObjectURL(file),
      raw: file,
    });
  }

  return (
    <div className={styles.wrapperImage}>
      <p className='description'>
        Adicione uma foto em sua noticia para poder adicionar uma capa atrativa
      </p>

      <ButtonSecondary onClick={() => inputFileRef.current.click()}>
        Selecione uma imagem
        <InputFile id='image' name='image' refInputFile={inputFileRef} onChange={handleChange}/>
      </ButtonSecondary>
    </div>
  )
}

SelectImage.propTypes = {
  setImage: PropTypes.func.isRequired,
}

export default SelectImage;
