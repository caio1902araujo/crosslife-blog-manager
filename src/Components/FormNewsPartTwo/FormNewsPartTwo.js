import React from 'react';
import PropTypes from 'prop-types';

import HeaderNews from '../HeaderNews/HeaderNews';
import SelectImage from '../SelectImage/SelectImage';
import CategoryList from '../CategoryList/CategoryList';
import PreviewImage from '../PreviewImage/PreviewImage';

import styles from './FormNewsPartTwo.module.css';

const listItems = ['academia', 'esportes', 'fitness', 'nutrição', 'receitas', 'saúde'];

const FormNewsPartTwo = ({setPage, image, headerTitle, setImage, category, handleSubmitNews}) => {
  const buttonSecondaryConfig = {
    content: 'Enviar',
    onClick: handleSubmitNews
  }

  const ButtonPrimaryConfig = {
    content: 'Voltar',
    onClick: () =>{
      setPage(1);
    }
  }

  return (
    <>
      <HeaderNews title={headerTitle} buttonPrimary={ButtonPrimaryConfig} buttonSecondary={buttonSecondaryConfig}/>
      <div className={styles.wrapperConfigNews}>
        <form onSubmit={(event) => event.preventDefault()}>
          <h3 className='subtitle'>Capa para a notícia</h3>
          {
            image.url ?
            <PreviewImage image={image} setImage={setImage}/> :
            <SelectImage setImage={setImage}/>
          }
        </form>

        <div>
          <h3 className='subtitle'>Escolha as categorias</h3>
          <p className='description'>
            Selecione uma categoria que mais se aproxime do assunto da notícia criada.
          </p>

          <CategoryList 
            listItems={listItems} 
            classCategory='categoriesGrid'
            error={category.error}
            handleClick={category.handleClick} 
            checkActive={category.checkActive}
          />
        </div>
      </div>
    </>
  )
}

FormNewsPartTwo.propTypes = {
  handleSubmitNews: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  setImage: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  headerTitle: PropTypes.string.isRequired,
}

export default FormNewsPartTwo;
