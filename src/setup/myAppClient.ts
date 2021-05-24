import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_BACK_URL,
  headers: {}
}

const myAppClient:AxiosInstance = axios.create(axiosConfig)

const initMyAppAuth = (accessToken:string):void => {
  myAppClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`
}

export default myAppClient
export { myAppClient, initMyAppAuth }
