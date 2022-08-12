import React from 'react';
import PropTypes from 'prop-types';

import InputFile from '../InputFile/InputFile';
import MoreOptions from '../ListOptions/MoreOptions';
import Tooltip from '../Tooltip/Tooltip';
import {ReactComponent as Options} from '../../Assets/options.svg';

import styles from './PreviewImage.module.css';

const PreviewImage = ({image, setImage}) => {
  const [active, setActive] = React.useState(false);
  const inputFileRef = React.useRef();
  const buttonVisibilityControlRef = React.useRef(null);

  const handleChange = ({target}) => {
    const file = target.files[0];
    setImage({
      url: URL.createObjectURL(file),
      raw: file,
    });

    const formData = new FormData();
    formData.append('cover', image.raw);
    const j = JSON.stringify(Object.fromEntries(formData.entries()));
    console.log(j);
    console.log(image.raw);
  }

  const listItems = [
    {
      content: <>
        <InputFile id='image' name='image' refInputFile={inputFileRef} onChange={handleChange}/>
        Editar
      </>,
      icon: 'edit',
      method: () => inputFileRef.current.click(),
    },
    {
      content: 'Remover',
      icon: 'remove',
      method: () => {
        setActive(false);
        setImage({});
      },
    }
  ]

  return (
    <div className={styles.wrapperPreview}>
      <img src={image.url} alt='capa notícia' className={styles.image}/>
      <button className={styles.buttonOptionsImage} aria-controls='optionsImage' onClick={() => {setActive(!active)}} ref={buttonVisibilityControlRef}>
        <Tooltip description='Mais Opções'>
          <Options />
        </Tooltip>
      </button>
      {
        active && 
        <MoreOptions id='optionsImage' listItems={listItems} setActive={setActive} buttonVisibilityControlRef={buttonVisibilityControlRef}/>
      }
    </div>
  )
}

PreviewImage.propTypes = {
  image: PropTypes.object.isRequired,
  setImage: PropTypes.func.isRequired,
}

export default PreviewImage;
