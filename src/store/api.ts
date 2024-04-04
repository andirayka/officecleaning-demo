import {createApi, BaseQueryFn} from '@reduxjs/toolkit/query/react';
import Toast from 'react-native-toast-message';
import type {AxiosRequestConfig, AxiosError} from 'axios';
import axios from 'axios';

const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: ''},
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      body?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async props => {
    const {url, method, body, params, headers} = props;

    try {
      const res = await axios({
        url: baseUrl + url,
        method,
        data: body,
        params,
        headers,
      });

      const finalResult = res.data;

      // Backend/server error
      if (!finalResult) {
        console.log(res.config.url);
        console.log(res.config.data);
        console.log(res.data);
        Toast.show({
          type: 'error',
          text1: 'Terdapat Kesalahan',
        });
        throw new Error('Terdapat Kesalahan');
      }

      // Unsuccesssful operation
      if (!finalResult.success) {
        console.log(res.config.url);
        console.log(res.config.data);
        console.log(finalResult);
        Toast.show({
          type: 'error',
          text1: finalResult.message || 'Terdapat Kesalahan',
        });
      }

      return {data: finalResult};
    } catch (axiosError) {
      const err = axiosError as AxiosError<{
        success: false;
        message: string;
      }>;
      console.log(err.response?.data);

      Toast.show({
        type: 'error',
        text1: err.response?.data?.message || 'Terdapat Kesalahan',
      });

      return {
        error: {
          data: err.response?.data,
        },
      };
    }
  };

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://ecopartner.site/api/',
  }),
  endpoints: () => ({}),
  tagTypes: ['Warehouse', 'Inbox', 'History', 'Bill', 'Delivery'],
});
