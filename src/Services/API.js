const url = "https://crosslifeapi.herokuapp.com"

export const TOKEN_POST = (body) => (
  {
    url: `${url}/login-instrutor`,
    options: {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    }
  }
)