const axios = require('axios');
function getAccessToken() {
  let data = JSON.stringify({
    "username": "app-luisp-user",
    "accessKey": "BP-XovmJMxzeMJg6Y2q0GouLOhEGdtP9Pika"
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.test.recetaonline.ar/api/Aplicacion/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios.request(config)
    .then((response) => {
      return response.data.result.accessToken;
    })
    .catch((error) => {
      console.log(error);
    });
}
function getLogin(accessToken) {
  let data = JSON.stringify({
    "urlCallback": "string",
    "paciente": {
      "nombre": "Felicia",
      "apellido": "Rey",
      "tipoDocumento": "DNI",
      "nroDocumento": "89789809",
      "sexo": "F",
      "email": "emmanuelfls371@gmail.com",
      "fechaNacimiento": "1990-12-21",
      "numeroAfiliado": "42731800060",
      "numeroFinanciador": "209",
      "plan": "S"
    },
    "medico": {
      "nombre": "CARLOS ALBERTO",
      "apellido": "SEGURA",
      "email": "hola@gmail.com",
      "tipoDocumento": "DNI",
      "nroDocumento": "0",
      "tipoMatricula": "MN",
      "numeroMatricula": "19307",
      "provinciaMatricula": "",
      "telefono": "string",
      "fechaNacimiento": "2023-06-28T13:10:11.958Z",
      "sexo": "M",
      "especialidad": "string"
    },
    "direccionConsultorio": "string"
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.test.recetaonline.ar/api/GenerateForm/Generate',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + accessToken
    },
    data: data
  };

  return axios.request(config)
    .then((response) => {
      return response.data.result.url
    })
    .catch((error) => {
      console.log(error);
    });
}
export async function getAccessTokenAndUrl() {
  const accessToken = await getAccessToken()
  const url = await getLogin(accessToken)
  console.log (url)
  return url
}
