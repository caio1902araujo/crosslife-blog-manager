const url = "https://crosslife-api.herokuapp.com";

export const SIGN_IN = ({username, password}) => (
  {
    url: `${url}/sessions/author`,
    options: {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
    }
  }
)

export const NEWS_GET = (token, queryString) => (
  {
    url: `${url}/news/profile/author?${queryString}`,
    options: {
      method: "GET",
      cache: "no-store",
      headers: {Authorization: `Bearer ${token}`}
    }
  }
)

export function NEWS_DELETE(id, token){
  return{
    url: `${url}/news/profile/author/${id}`,
    options:{
      method: 'DELETE',
      headers: {Authorization: `Bearer ${token}`}
    },
  };
}

export const NEWS_POST = ({body, token}) => (
  {
    url:`${url}/news/profile/author`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  }
)

export const NEWS_PUT = (id, body, token) => (
  {
    url:`${url}/news/profile/author/${id}`,
    options: {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body),
    }
  }
)

export const NEWS_GET_ID = (id, token) => (
  {
    url: `${url}/news/profile/author/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
      headers: {Authorization: `Bearer ${token}`},
    }
  }
)