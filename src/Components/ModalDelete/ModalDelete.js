import React from 'react';
import styles from './ModalDelete.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { AuthContext } from '../../Hooks/useAuth';
import useOutsideClick from '../../Hooks/useOutsideClick';
import Input from '../Input/Input';
import ButtonSecondary from '../Button/ButtonSecondary';
import {ReactComponent as Cross} from '../../Assets/cross.svg';
import { NEWS_DELETE } from '../../Services/API';
import PropTypes from 'prop-types';

const ModalDelete = ({setModalDelete, newsData, setChangeFeed}) => {
  const titleNews = useForm(true, "", newsData.titulo);
  const {request} = useFetch();
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, setModalDelete, false);
  const {setAlert} = React.useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (titleNews.validate()){
      let propsAlert;
      const {url, options} = NEWS_DELETE(newsData.id);
      const {response} = await request(url, options);
      if (response.ok) {
        setModalDelete(false);
        setChangeFeed(changeFeed => changeFeed + 1);
        propsAlert = {
          message: "Notícia deletada com sucesso",
          typeAlert: "alertSuccess",
        }
      }
      else{
        propsAlert = {
          message: "Erro ao deletar a notícia, erro interno",
          typeAlert: "alertError",
        }
      }
      setAlert(propsAlert);
    }
  }

  return (
    <div className={styles.modalDelete}>
      <div className={styles.modalBox} ref={wrapperRef}>
        <div className={styles.modalHeader}>
          <h1>Você tem certeza disso?</h1>
          <button onClick={() => {setModalDelete(false)}}><Cross /></button>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.modalText}>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente a notícia, incluindo todo conteúdo dela como fotos e textos. Se não tiver certeza pode clicar no X acima para fechar o alerta.
          </p>

          <p className={styles.modalText}>
            Digite <span className={styles.titleNews}>{newsData.titulo}</span> na caixa abaixo e clique no botão para confirmar a exclusão
          </p>

          <form className={styles.modalForm} onSubmit={handleSubmit}>
            <Input id="titleNews" type="text" {...titleNews}/>
            <ButtonSecondary>Exclua esta notícia</ButtonSecondary>
          </form>
        </div>
      </div>
    </div>
  )
}

ModalDelete.propTypes = {
  setModalDelete: PropTypes.func.isRequired,
  newsData: PropTypes.object.isRequired,
}

export default ModalDelete
