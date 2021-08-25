import axios from '@/utils/request'
import {SERVER_URL} from './index'

//获取列表信息（GET）
export const queryArticles = (params) => {
  return axios.post(SERVER_URL+'/articles', { _method: 'GET', _args: params })
}

//删除单条信息
export const deleteArticle = (id) => {
  return axios.delete(SERVER_URL+`/articles/${id}`)
}

//更细单条信息
export const updateArticle = (id, params) => {
  return axios.put(SERVER_URL+`/articles/${id}`, params)
}

//获取单条信息
export const getArticle = (id) => {
  return axios.get(SERVER_URL+`/articles/${id}`)
}

//新增一条数据（POST）
export const createArticle = (params) => {
  return axios.post(SERVER_URL+'/articles', params)
}