import React from 'react';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import useCategory from '../../Hooks/useCategory';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Hooks/useAuth';
import FormPartOne from '../FormPartOne/FormPartOne';
import FormPartTwo from '../FormPartTwo/FormPartTwo';
import Loader from '../Loader/Loader'
import { NEWS_POST, NEWS_PUT } from '../../Services/API';
import PropTypes from 'prop-types';

const FormCreateNews = ({methodForm, dateForm}) => {
  const title = useForm(true, dateForm ? dateForm["title"]:"");
  const subtitle = useForm(false, dateForm ? dateForm["subtitle"]:"");
  const paragraph = useForm(true, dateForm ? dateForm["body"]:"");
  const [imageUrl, setImageUrl] = React.useState({});
  const category = useCategory(true, dateForm ? dateForm["category"]:"");

  const [page, setPage] = React.useState(1);
  const { setAlert } = React.useContext(AuthContext);
  const {request, loading} = useFetch();
  const navigate = useNavigate();

  const dateFetch = (methodForm, body) => {
    const token = window.localStorage.getItem('token');
    if (methodForm === "post") return NEWS_POST({body, token});
    if (methodForm === "put") return NEWS_PUT(dateForm.id, body, token);
    else return null;
  }

  const handleSubmitNews = async () => {
    
    if(category.validate()){
      let propsAlert;

      const body = {
        title: title.value,
        subtitle: subtitle.value || undefined,
        body: paragraph.value,
        category: category.value, 
      };

      const {url, options} = dateFetch(methodForm, body);
      const {response} = await request(url, options);

      if (response && response.ok){
        propsAlert = {
          message: `Notícia postada com sucesso`,
          typeAlert: "alertSuccess",
        }
      }
      else{
        propsAlert = {
          message: "Falha ao postar a notícia, erro interno",
          typeAlert: "alertError",
        }
      }
      setAlert(propsAlert);
      navigate("/noticias");
    }
  }

  switch (page){
    case 1:
      return <FormPartOne title={title} subtitle={subtitle} paragraph={paragraph} setPage={setPage}/>
    case 2:
      return <>
        <FormPartTwo setPage={setPage} imageField={{imageUrl, setImageUrl}} category={category} handleSubmitNews={handleSubmitNews}/>
        {loading && <Loader description="Postando notícia"/>}
      </>
    default:
      return null
  }
}

FormCreateNews.propTypes = {
  methodForm: PropTypes.string.isRequired,
  dateForm: PropTypes.object,
}

export default FormCreateNews
