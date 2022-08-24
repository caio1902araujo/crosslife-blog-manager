import React from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../Hooks/useFetch';
import { AuthContext } from '../../Hooks/useAuth';

import InputFile from '../InputFile/InputFile';
import Loader from '../Loader/Loader';
import defaultAvatar from '../../Assets/defaultAvatar.png';

import { AUTHOR_AVATAR_PATCH } from '../../Services/API';

import styles from './Avatar.module.css';

const Avatar = ({avatarUrl}) => {
  const { request, loading, error } = useFetch();
  const {setAlert} = React.useContext(AuthContext);
  const inputFileRef = React.useRef();
  const [image, setImage] = React.useState(() => (avatarUrl) ? avatarUrl : defaultAvatar);

  const handleChange = async ({target}) => {
    const file = target.files[0];
    const formData = new FormData();
    const token = window.localStorage.getItem('token');

    formData.append('avatar', file);

    const {url, options} = AUTHOR_AVATAR_PATCH(formData, token);
    const { response} = await request(url, options);

    if(response && response.ok){
      setImage(URL.createObjectURL(file));
      setAlert({
        message: 'Avatar modificada com sucesso!',
        typeAlert: 'alertSuccess',
      });
    }
  }

  React.useEffect(()=>{
    if(error !== null){
      setAlert({
        message: error,
        typeAlert: 'alertError',
      })
    }
  },[error])
  
  if(loading) return <div className={styles.skeleton}></div>

  return (
    <button className={styles.avatar}  onClick={() => inputFileRef.current.click()} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition:'center'}}>
      <InputFile id='image' name='image' refInputFile={inputFileRef} onChange={handleChange}/>
    </button>
  )
}

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
}

export default Avatar;
