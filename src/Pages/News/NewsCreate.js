import React from 'react';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import useCategory from '../../Hooks/useCategory';
import { AuthContext } from '../../Hooks/useAuth';

import FormNewsPartOne from '../../Components/FormNewsPartOne/FormNewsPartOne';
import FormNewsPartTwo from '../../Components/FormNewsPartTwo/FormNewsPartTwo';
import Loader from '../../Components/Loader/Loader';
import Head from '../../Components/head/head';

import { NEWS_POST, NEWS_COVER_PATCH } from '../../Services/API';

const NewsCreate = () => {
  const {request, loading, error} = useFetch();
  const [page, setPage] = React.useState(1);
  const { setAlert } = React.useContext(AuthContext);
  const navigate = useNavigate();
  let propsAlert = {
    message: 'Notícia postada com sucesso',
    typeAlert: 'alertSuccess',
  }
  
  const title = useForm(true);
  const subtitle = useForm(false);
  const paragraph = useForm(true);
  const category = useCategory(true);
  const [image, setImage] = React.useState({});

  const handleSubmitNews = async () => {
    if(category.validate()){
      const token = window.localStorage.getItem('token');

      const body = {
        title: title.value,
        subtitle: subtitle.value || undefined,
        body: paragraph.value,
        category: category.value, 
      };

      const {url, options} = NEWS_POST(body, token);
      const {response, json} = await request(url, options);

      if (response && response.ok){
        if(Object.keys(image).length > 0 && image.url !== json.coverUrl){
          const formData = new FormData();

          formData.append('cover', image.raw);

          const {url, options} = NEWS_COVER_PATCH(json.id, formData, token);
          await request(url, options);
        }
      }
      setPage(3);
    }
  }

  switch (page){
    case 1:
      return (
        <>
          <Head title='Criar Notícia' description='página para criar notícia'/>
          <FormNewsPartOne title={title} subtitle={subtitle} paragraph={paragraph} setPage={setPage}/>
        </>
      )
    case 2:
      return <>
        <FormNewsPartTwo setPage={setPage} image={image} setImage={setImage} category={category} handleSubmitNews={handleSubmitNews}/>
        {loading && <Loader description='Postando notícia'/>}
      </>
    case 3:
      setTimeout(()=>{
        if(error){
          propsAlert = {
            message: error,
            typeAlert: 'alertError',
          };
        }
        setAlert(propsAlert);
        navigate('/noticias');
      }, 0);
    
      return null
    default:
      return null
  }
}

export default NewsCreate;
