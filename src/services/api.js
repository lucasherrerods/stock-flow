import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-controle-de-estoque-production.up.railway.app'
})

export default api