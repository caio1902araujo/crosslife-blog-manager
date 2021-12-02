const url = "https://crosslifeapi.herokuapp.com"

export const SIGN_IN = (body) => (
  {
    url: `${url}/login-instrutor`,
    options: {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    }
  }
)

export const SIGN_OUT = (token) => (
  {
    url: `${url}/logout-instrutor`,
    options: {
      method: "POST",
      headers: {Authorization: `Bearer ${token}`},
    }
  }
)

export const NEWS_GET = () => (
  {
    url: `${url}/noticias`,
    options: {
      method: "GET",
      cache: "no-store",
    }
  }
)

export function NEWS_DELETE(id){
  return{
    url: `${url}/noticia/${id}`,
    options:{
      method: 'DELETE',
    },
  };
}
