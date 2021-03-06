import React from 'react';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Hooks/useAuth';
import FormPartOne from '../FormPartOne/FormPartOne';
import FormPartTwo from '../FormPartTwo/FormPartTwo';
import Loader from '../Loader/Loader'
import { NEWS_POST, NEWS_PUT } from '../../Services/API';
import PropTypes from 'prop-types';

const FormCreateNews = ({methodForm, dateForm}) => {
  const title = useForm(true, dateForm ? dateForm["titulo"]:"");
  const subtitle = useForm(false, dateForm ? dateForm["subtitulo"]:"");
  const paragraph = useForm(true, dateForm ? dateForm["corpo"]:"");
  const [imageUrl, setImageUrl] = React.useState({});
  const [category, setCategory] = React.useState(dateForm ? dateForm["categoria"]:"");

  const [page, setPage] = React.useState(1);
  const [errorCategory, setErrorCategory] = React.useState("");
  const { setAlert } = React.useContext(AuthContext)
  const {request, loading} = useFetch();
  const navigate = useNavigate();

  const convertDate = () => {
    const date = new Date();
    const dataString = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return dataString;
  }

  const dateFetch = (methodForm, body) => {
    if (methodForm === "post") return NEWS_POST(body);
    if (methodForm === "put") return NEWS_PUT(dateForm.id, body);
    else return null;
  }

  const handleSubmitNews = async () => {
    
    if(category !== ""){
      let propsAlert;
      const curretDate = convertDate();
      const body = {
        titulo: title.value,
        subtitulo: subtitle.value,
        corpo: paragraph.value,
        categoria: category,
        autor: "Caio Araujo",
        imagem: imageUrl.image ? imageUrl.image : null,
        data_criacao: curretDate,
      };
      const {url, options} = dateFetch(methodForm, body);
      const {response} = await request(url, options);
      if (response && response.ok){
        propsAlert = {
          message: `Not??cia postada com sucesso`,
          typeAlert: "alertSuccess",
        }
      }
      else{
        propsAlert = {
          message: "Falha ao postar a not??cia, erro interno",
          typeAlert: "alertError",
        }
      }
      setAlert(propsAlert);
      navigate("/noticias");
    }
    else{
      setErrorCategory("Erro: Selecione um categoria antes de postar a not??cia")
    }
  }

  switch (page){
    case 1:
      return <FormPartOne title={title} subtitle={subtitle} paragraph={paragraph} setPage={setPage}/>
    case 2:
      return <>
        <FormPartTwo setPage={setPage} imageField={{imageUrl, setImageUrl}} categoryField={{category, setCategory}} errorCategory={errorCategory} setErrorCategory={setErrorCategory} handleSubmitNews={handleSubmitNews}/>
        {loading && <Loader description="Postando not??cia"/>}
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
