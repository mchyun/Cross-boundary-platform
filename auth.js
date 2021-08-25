import axios from '@/utils/request'
import {SERVER_URL} from './index'

export const login = (params) => {
  return axios.post(SERVER_URL+'/admin', params)
}
