import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '@/lib/config';

const APIClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

async function makeAPIRequest<T>(method: string, path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await APIClient.request({
      method,
      url: path,
      data,
      ...config,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export { APIClient, makeAPIRequest };
