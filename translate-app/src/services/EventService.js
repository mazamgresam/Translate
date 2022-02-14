import axios from 'axios'

const api = axios.create( {
  baseURL: 'https://amm-api-translate.herokuapp.com',
  withCredentials: false
})

export default {
  getTranslate(engine, text, language) {
    return api.get(`/translate?engine=${engine}&text=${text}&to=${language}`)
  }
}