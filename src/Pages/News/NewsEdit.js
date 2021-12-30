import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { useParams } from 'react-router-dom';
import { NEWS_GET_ID } from '../../Services/API';
import FormCreateNews from '../../Components/FormCreateNews/FormCreateNews';

const NewsEdit = () => {
  const {id} = useParams();
  const {data, request} = useFetch();

  React.useEffect(()=>{
    const requestNews = async () => {
      const {url, options} = NEWS_GET_ID(id);
      await request(url, options);
    } 
    requestNews();
  }, [request, id]);

  if(data){
    return <FormCreateNews methodForm="put" dateForm={data}/>;
  }
  else return null;
}

export default NewsEdit
