import React from 'react'
import { useParams } from 'react-router-dom';

import useFetch from '../../Hooks/useFetch';

import FormCreateNews from '../../Components/FormCreateNews/FormCreateNews';
import Loader from '../../Components/Loader/Loader';
import Warning from '../../Components/Warning/Warning';

import { NEWS_GET_ID } from '../../Services/API';

const NewsEdit = () => {
  const {id} = useParams();
  const {data, error, loading, request} = useFetch();

  React.useEffect(()=>{
    const requestNews = async () => {
      const token = window.localStorage.getItem('token');
      const {url, options} = NEWS_GET_ID(id, token);
      await request(url, options);
    } 
    requestNews();
  }, [request, id]);

  if(error) return <Warning title='Erro ao carregar notícias' description={error}/>
  if (loading) return <Loader description='Carregando notícia'/>
  if(data) return <FormCreateNews methodForm='put' dateForm={data}/>
  else return null;
}

export default NewsEdit;
