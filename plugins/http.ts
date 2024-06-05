import axios, { AxiosError, type AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { mockData } from '~/shared/mock-data';
import { RequestMethod } from '~/shared/models/restful-api.model';

export default defineNuxtPlugin(({ $config }) => {
  // .env 環境變數值為 true & 1 可為 boolean & number
  // .env.production 環境變數值為 true & 1 都為 string
  // 在此 useFakeData 統一轉換為 boolean
  const useFakeData = Boolean(Number($config.public.useFakeData));
  const copyMockData = mockData as {
    [key in string]: any;
  };
  const http = axios.create({
    baseURL: $config.public.apiServer,
    headers: {
    //   post: {
    //     'Content-Type': 'application/json',
    //   },
      common: {
        Authorization: `Client-ID ${$config.public.imgur.clientId}`,
      },
    },
  });

  http.interceptors.request.use(
    (config) => {
      return config;
    },
    (error: AxiosError) => {
      ElMessage({
        message: error.message,
        type: 'error',
        plain: true,
      });
      return Promise.reject(error);
    },
  );

  http.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.status === 200) {
        return response.data;
      }
    },
    (error: AxiosError) => {
      ElMessage({
        message: error.message,
        type: 'error',
        plain: true,
      });
      return Promise.reject(error);
    },
  );

  /**
   * 發送 http 請求
   * @param path API 路徑（包含 method）
   * @param replacePathParams 替換 需動態插值的 API 路徑 參數
   * @param params 傳送參數
   */
  function request(
    path: string,
    replacePathParams: any = {},
    params: any = {},
  ): Promise<any> {
    const newPath = getPath(path, replacePathParams);
    const regexp = /^@(GET|POST|DELETE|PATCH)(.*)/g;
    const [, method, action] = regexp.exec(newPath) || [];

    switch (method) {
      case RequestMethod.Get:
        return methodGet(action, params);
      case RequestMethod.Post:
        return methodPost(action, params);
      case RequestMethod.Patch:
        return methodPatch(action, params);
      case RequestMethod.Delete:
        return methodDelete(action);
      default:
        const message = 'Not allow method';

        ElMessage({
          message,
          type: 'error',
          plain: true,
        });

        return Promise.reject(message);
    }
  }

  /**
   * 回傳需動態插值的 API 路徑
   * ex：@GET/objects/{object_id}，replacePathParams = { object_id }
   * @param path API 路徑（包含 method）
   * @param replacePathParams 替換 需動態插值的 API 路徑 參數
   */
  function getPath(path: string, replacePathParams: any = {}): string {
    let newPath = path;

    if (!useFakeData) {
      Object.entries(replacePathParams).forEach(([key, value]) => {
        let re = new RegExp(`{${key}}`, 'g');

        newPath = newPath.replace(re, value as string);
      });
    }

    return newPath;
  }

  /**
   * GET 方法
   * @param action API 路徑（不含 method）
   * @param params 傳送參數
   */
  function methodGet(action: string, params: any = {}): Promise<any> {
    const path = `@GET${action}`;
    const mockAdapterData = copyMockData[path] || null;

    if (useFakeData) {
      const mock = new MockAdapter(http);

      mock.onGet(action).reply(200, mockAdapterData);
    }

    console.log(`%c ${path}`, 'background: gray; color: #bada55');

    return http.get(action, { params });
  }

  /**
   * POST 方法
   * @param action API 路徑（不含 method）
   * @param params 傳送參數
   */
  function methodPost(action: string, params: any = {}): Promise<any> {
    const path = `@POST${action}`;
    const mockAdapterData = copyMockData[path] || null;

    if (useFakeData) {
      const mock = new MockAdapter(http);

      mock.onPost(action).reply(200, mockAdapterData);
    }

    console.log(`%c ${path}`, 'background: gray; color: #bada55');

    return http.post(action, params);
  }

  /**
   * PATCH 方法
   * @param action API 路徑（不含 method）
   * @param params 傳送參數
   */
  function methodPatch(action: string, params: any = {}): Promise<any> {
    const path = `@PATCH${action}`;
    const mockAdapterData = copyMockData[path] || null;

    if (useFakeData) {
      const mock = new MockAdapter(http);

      mock.onPatch(action).reply(200, mockAdapterData);
    }

    console.log(`%c ${path}`, 'background: gray; color: #bada55');

    return http.patch(action, params);
  }

  /**
   * DELETE 方法
   * @param action API 路徑（不含 method）
   */
  function methodDelete(action: string): Promise<any> {
    const path = `@DELETE${action}`;
    const mockAdapterData = copyMockData[path] || null;

    if (useFakeData) {
      const mock = new MockAdapter(http);

      mock.onDelete(action).reply(200, mockAdapterData);
    }

    console.log(`%c ${path}`, 'background: gray; color: #bada55');

    return http.delete(action);
  }

  return {
    provide: {
      request,
    },
  };
});
