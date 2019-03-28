import axios from 'axios'
export function getList (limit, currentPage) {
  return axios({
    method: 'get',
    url: '/api/getList'
  })
}