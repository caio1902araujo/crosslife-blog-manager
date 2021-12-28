import React from 'react'
import styles from './PreviewImage.module.css'
import InputFile from '../InputFile/InputFile';
import MoreOptions from '../ListOptions/MoreOptions'
import {ReactComponent as Options} from '../../Assets/options.svg'

const PreviewImage = ({imageFile}) => {
  const [active, setActive] = React.useState(false);
  const inputFileRef = React.useRef();
  const buttonVisibilityControlRef = React.useRef(null);

  const handleChange = ({target}) => {
    const file = target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      imageFile.setImageUrl({
        preview: URL.createObjectURL(file),
        image: {
          "blob": reader.result.replace(/^data:image\/[a-z]+;base64,/, ""),
          "nome_do_arquivo": file.name
        },
      });
    }
    reader.readAsDataURL(file); 
  }

  const listItems = [
    {
      content: <>
        <InputFile id="image" name="image" refInputFile={inputFileRef} onChange={handleChange}/>
        Editar
      </>,
      icon: 'edit',
      method: () => inputFileRef.current.click(),
    },
    {
      content: "Remover",
      icon: 'remove',
      method: () => {
        setActive(false);
        imageFile.setImageUrl({});
      },
    }
  ]

  return (
    <div className={styles.wrapperPreview}>
      <img src={imageFile.imageUrl.preview} alt="capa notícia" className={styles.image}/>
      <button className={styles.buttonOptionsImage} aria-controls="optionsImage" onClick={() => {setActive(!active)}} ref={buttonVisibilityControlRef}>
        <Options />
      </button>
      {
        active && 
        <MoreOptions id="optionsImage" listItems={listItems} setActive={setActive} buttonVisibilityControlRef={buttonVisibilityControlRef}/>
      }
    </div>
    )
  }

export default PreviewImage
