import React from 'react';

import useFetch from '../../Hooks/useFetch';
import { AuthContext } from '../../Hooks/useAuth';

import Header from '../../Components/Header/Header';
import Loader from '../../Components/Loader/Loader';
import Warning from '../../Components/Warning/Warning';
import Avatar from '../../Components/Avatar/Avatar';
import Alert from '../../Components/Alert/Alert';
import Head from '../../Components/head/head';
import ModalDescriptionAuthor from '../../Components/ModalDescriptionAuthor/ModalDescriptionAuthor';
import { ReactComponent as Pencil } from '../../Assets/pencil.svg';

import { AUTHOR_GET } from '../../Services/API';

import styles from './ProfileAuthor.module.css';

const ProfileAuthor = () => {
  const { request, data, loading, error } = useFetch();
  const [modal, setModal] = React.useState(false);
  const [change, setChange] = React.useState(0);
  const {alert} = React.useContext(AuthContext);

  React.useEffect(()=>{
    (async () => {
      const token = window.localStorage.getItem('token');
      const { url, options } = AUTHOR_GET(token);
      await request(url, options);
    })();
  }, [request, change]);

  if(loading){
    return (
      <>
        <Header />
        <Loader description="Carregando dados do autor"/>
      </>
    )
  }

  if(error){
    <>
      <Header />
      <Warning title='Erro ao carregar notícias' description={error} svg='error'/>
    </>
  }

  if(data){
    return (
      <>  
        <Head title={data.name} description='Perfil do autor'/>
        <Header />
        <section className={styles.wrapper}>
          <div className={styles.header}>

            <Avatar avatarUrl={data.avatarUrl}/>

            <span className={styles.name}>{data.name}</span>
            <span className={styles.username}>{data.username}</span>
          </div>
  
          <div className={styles.body}>
            <div className={styles.bodyHeader}>
              <h1 className={styles.title}>Descrição</h1>
              <button onClick={() => setModal(true)}>
                <Pencil/>
              </button> 
            </div>
  
            <p>
              {data.description}
            </p>
          </div>
        </section>
        {alert && <Alert message={alert.message} typeAlert={alert.typeAlert}/> }
        {modal && <ModalDescriptionAuthor setModal={setModal} setChange={setChange} description={data.description}/>}
      </>
    )
  }

  else return null;
}

export default ProfileAuthor;