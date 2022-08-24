import React from 'react';
import PropTypes from 'prop-types';

import useForm from '../../Hooks/useForm';
import useOutsideClick from '../../Hooks/useOutsideClick';
import useFetch from '../../Hooks/useFetch';
import { AuthContext } from '../../Hooks/useAuth';

import Input from '../Input/Input';
import ButtonSecondary from '../Button/ButtonSecondary';
import {ReactComponent as Cross} from '../../Assets/cross.svg';

import { AUTHOR_PUT } from '../../Services/API';

import styles from './ModalDescriptionAuthor.module.css';

const ModalDescriptionAuthor = ({setModal, setChange, description}) => {
  const fieldDescription = useForm(true, description);
  const wrapperRef = React.useRef(null);
  const {setAlert} = React.useContext(AuthContext);
  const { request, loading, error} = useFetch();
  useOutsideClick(wrapperRef, setModal, false);

  const handleSubmit = async (event) => {
    event.preventDefault()
    const token = window.localStorage.getItem('token');

    const body = {
      description: fieldDescription.value,
    };

    const { url, options } = AUTHOR_PUT(body, token);
    const { json } = await request(url, options);

    if(json){
      setAlert({
        message: 'Descrição modificada com sucesso!',
        typeAlert: 'alertSuccess',
      });
      
      setChange((change)=> change + 1);
      setModal(false);
    }
  }

  const handleResize = ({target}) => {
    target.style.height = 'auto';
    target.style.height = (target.scrollHeight) + 'px';
  }

  React.useEffect(()=> {
    if(error){
      setAlert({
        message: error,
        typeAlert: 'alertError',
      });
  
      setModal(false);
    }
    
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.header}>
          <h1>Editando descrição</h1>
          <button onClick={() => setModal(false)}><Cross /></button>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input 
            id='description'
            isBox={true}
            onInput={handleResize}
            error={fieldDescription.error}
            value={fieldDescription.value}
            onChange={fieldDescription.onChange}
            onBlur={fieldDescription.onBlur}
          />
          {
            loading ?
            <ButtonSecondary disabled>Salvando...</ButtonSecondary> :
            <ButtonSecondary>Salvar alteração</ButtonSecondary>
          }
        </form>
      </div>
    </div>
  )
}

ModalDescriptionAuthor.propTypes = {
  setModal: PropTypes.func.isRequired,
  setChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
}

export default ModalDescriptionAuthor;
