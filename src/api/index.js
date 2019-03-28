import axios from 'axios'
export function getList (limit, page) {
  return axios({
    method: 'get',
    url: `/api/getList?limit=${limit}&page=${page}`
  })
}