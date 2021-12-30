import React from 'react';
import styles from './FormPartTwo.module.css';
import HeaderNews from '../HeaderNews/HeaderNews';
import SelectImage from '../SelectImage/SelectImage';
import CategoryList from '../CategoryList/CategoryList';
import PreviewImage from '../PreviewImage/PreviewImage';
import PropTypes from 'prop-types';

const FormPartTwo = ({setPage, imageField, categoryField, errorCategory, setErrorCategory, handleSubmitNews}) => {
  const buttonSecondaryConfig = {
    content: "Enviar",
    onClick: handleSubmitNews
  }

  const ButtonPrimaryConfig = {
    content: "Voltar",
    onClick: () =>{
      setPage(1);
    }
  }

  return (
    <>
      <HeaderNews title="Criando notícia" buttonPrimary={ButtonPrimaryConfig} buttonSecondary={buttonSecondaryConfig}/>
      <div className={styles.wrapperConfigNews}>
        <form onSubmit={(event) => event.preventDefault()}>
          <h3 className="subtitle">Capa para a notícia</h3>
          {
            imageField.imageUrl.preview ?
            <PreviewImage imageFile={imageField}/> :
            <SelectImage setImageUrl={imageField.setImageUrl}/>
          }
        </form>

        <div>
          <h3 className="subtitle">Escolha as categorias</h3>
          <p className="description">
            Selecione uma categoria que mais se aproxime do assunto da notícia criada.
          </p>
          <CategoryList setCategory={categoryField.setCategory} category={categoryField.category} setErrorCategory={setErrorCategory} errorCategory={errorCategory}/>
        </div>
      </div>
    </>
  )
}

FormPartTwo.propTypes = {
  handleSubmitNews: PropTypes.func.isRequired,
  categoryField: PropTypes.object.isRequired,
  imageField: PropTypes.object.isRequired,
  errorCategory: PropTypes.string.isRequired,
  setErrorCategory: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
}

export default FormPartTwo
