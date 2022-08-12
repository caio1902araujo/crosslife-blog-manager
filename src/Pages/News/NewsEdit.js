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
import Warning from '../../Components/Warning/Warning';

import { NEWS_GET_ID, NEWS_PUT, NEWS_COVER_PATCH } from '../../Services/API';

const NewsEdit = () => {
  const {id} = useParams();
  const {data, error, loading, request} = useFetch();
  const [page, setPage] = React.useState(1);
  const { setAlert } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const title = useForm(true, '');
  const subtitle = useForm(false, '');
  const paragraph = useForm(true, '');
  const category = useCategory(true, '');
  const [image, setImage] = React.useState({});

  React.useEffect(()=>{
    const requestNews = async () => {
      const token = window.localStorage.getItem('token');
      const {url, options} = NEWS_GET_ID(id, token);
      const { json } = await request(url, options);

      title.setValue(json.title);
      subtitle.setValue(json.subtitle || '');
      paragraph.setValue(json.body);
      category.setValue(json.category);
      setImage({
        url: json.coverUrl,
      });
    } 
    requestNews();
  }, [request, id]);

  const handleSubmitNews = async () => {
    if(category.validate()){
      const token = window.localStorage.getItem('token');
      let propsAlert = {
        message: 'Notícia postada com sucesso',
        typeAlert: 'alertSuccess',
      }

      const body = {
        title: title.value,
        subtitle: subtitle.value || undefined,
        body: paragraph.value,
        category: category.value, 
      };

      const {url, options} = NEWS_PUT(data.id, body, token);
      const {response, json} = await request(url, options);

      if (response && response.ok){
        if(Object.keys(image).length > 0 && image.url !== json.coverUrl){
          const formData = new FormData();

          formData.append('cover', image.raw);

          const {url, options} = NEWS_COVER_PATCH(json.id, formData, token);
          const {response} = await request(url, options);

          if(!response.ok){
            propsAlert = {
              message: 'Falha ao postar imagem de capa',
              typeAlert: 'alertError',
            }
          }
        }
      }
      else{
        propsAlert = {
          message: 'Falha ao postar a notícia, erro interno',
          typeAlert: 'alertError',
        }
      }
      setAlert(propsAlert);
      navigate('/noticias');
    }
  }

  if(error) return <Warning title='Erro ao carregar notícias' description={error}/>

  if (loading) return <Loader description='Carregando notícia'/>

  if(data) {
    switch (page){
      case 1:
        return <FormNewsPartOne title={title} subtitle={subtitle} paragraph={paragraph} setPage={setPage}/>
      case 2:
        return <>
          <FormNewsPartTwo setPage={setPage} image={image} setImage={setImage} category={category} handleSubmitNews={handleSubmitNews}/>
          {loading && <Loader description='Postando notícia'/>}
        </>
      default:
        return null
    }
  }

  else return null;
}

export default NewsEdit;
