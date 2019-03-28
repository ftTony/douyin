import axios from 'axios'

const api_url = 'http://localhost:3000/'

export function getList (limit, currentPage) {
  return axios.get({
    url: `${api_url}/api`
  })
}