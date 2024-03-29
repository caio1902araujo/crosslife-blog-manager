import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import useCategory from '../../Hooks/useCategory';
import { AuthContext } from '../../Hooks/useAuth';

import FormNewsPartOne from '../../Components/FormNewsPartOne/FormNewsPartOne';
import FormNewsPartTwo from '../../Components/FormNewsPartTwo/FormNewsPartTwo';
import Loader from '../../Components/Loader/Loader';

import { NEWS_GET_ID, NEWS_PUT, NEWS_COVER_PATCH } from '../../Services/API';
import Head from '../../Components/head/head';

const NewsEdit = () => {
  const {id} = useParams();
  const fetchNewsGet = useFetch();
  const fetchNewsPut = useFetch();
  const [page, setPage] = React.useState(1);
  const { setAlert } = React.useContext(AuthContext);
  const navigate = useNavigate();

  let propsAlert = {
    message: 'Notícia editada com sucesso',
    typeAlert: 'alertSuccess',
  }

  const title = useForm(true, '');
  const subtitle = useForm(false, '');
  const paragraph = useForm(true, '');
  const category = useCategory(true, '');
  const [image, setImage] = React.useState({});

  React.useEffect(()=>{
    const requestNews = async () => {
      const token = window.localStorage.getItem('token');
      const {url, options} = NEWS_GET_ID(id, token);
      const { json } = await fetchNewsGet.request(url, options);

      if(json){
        title.setValue(json.title);
        subtitle.setValue(json.subtitle || '');
        paragraph.setValue(json.body);
        category.setValue(json.category);
        setImage({
          url: json.coverUrl,
        });
      }
    }
    requestNews();
  }, [id]);

  const handleSubmitNews = async () => {
    if(category.validate()){
      const token = window.localStorage.getItem('token');

      const body = {
        title: title.value,
        subtitle: subtitle.value || undefined,
        body: paragraph.value,
        category: category.value, 
      };

      const {url, options} = NEWS_PUT(fetchNewsGet.data.id, body, token);
      const {response, json} = await fetchNewsPut.request(url, options);

      if (response && response.ok){
        if(Object.keys(image).length > 0 && image.url !== json.coverUrl){
          const formData = new FormData();

          formData.append('cover', image.raw);

          const {url, options} = NEWS_COVER_PATCH(json.id, formData, token);
          await fetchNewsPut.request(url, options);
        }
      }
      setPage(3)
    }
  }

  if(fetchNewsGet.error) {
    setTimeout(()=>{
      propsAlert = {
        message: fetchNewsGet.error,
        typeAlert: 'alertError',
      };
      setAlert(propsAlert);
      navigate('/noticias');
    }, 0);

    return null;
  }

  if (fetchNewsGet.loading) return <Loader description='Carregando notícia'/>

  if(fetchNewsGet.data) {
    switch (page){
      case 1:
        return (
          <>
            <Head title='Editar notícia' description='página para editar notícia' />
            <FormNewsPartOne headerTitle="Editando notícia" title={title} subtitle={subtitle} paragraph={paragraph} setPage={setPage}/>
          </>
        )
      case 2:
        return <>
          <FormNewsPartTwo setPage={setPage} headerTitle="Editando notícia" image={image} setImage={setImage} category={category} handleSubmitNews={handleSubmitNews}/>
          {fetchNewsPut.loading && <Loader description='Postando notícia'/>}
        </>
      case 3:
        setTimeout(()=>{
          if(fetchNewsPut.error){
            propsAlert = {
              message: fetchNewsPut.error,
              typeAlert: 'alertError',
            };
          }
          setAlert(propsAlert);
          navigate('/noticias');
        }, 0);

        return null;
      default:
        return null
    }
  }

  else return null;
}

export default NewsEdit;
