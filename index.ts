import 'reflect-metadata';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

class Commons {


}

class RestService {
  /**
   *
   * @param url
   * @param headers
   */
  public static async get(url: string, headers: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let options: AxiosRequestConfig = {
        method: 'GET',
        url: url,
        headers: headers,
      };
      axios(options)
        .then((response: AxiosResponse) => resolve(response.data))
        .catch((error: AxiosError) =>
          reject(error.response ? error.response.data : error.message),
        );
    });
  }
  /**
   *
   * @param url
   * @param headers
   */
  public static async post(url: string, body: any, headers: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let options: AxiosRequestConfig = {
        method: 'POST',
        url: url,
        headers: headers,
        data: body,
      };
      axios(options)
        .then((response: AxiosResponse) => resolve(response.data))
        .catch((error: AxiosError) =>
          reject(error.response ? error.response.data : error.message),
        );
    });
  }
  /**
   *
   * @param url
   * @param headers
   */
  public static async put(url: string, body: any, headers: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let options: AxiosRequestConfig = {
        method: 'PUT',
        url: url,
        headers: headers,
        data: body,
      };
      axios(options)
        .then((response: AxiosResponse) => resolve(response.data))
        .catch((error: AxiosError) =>
          reject(error.response ? error.response.data : error.message),
        );
    });
  }
  /**
   *
   * @param url
   * @param headers
   */
  public static async delete(url: string, headers: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let options: AxiosRequestConfig = {
        method: 'DELETE',
        url: url,
        headers: headers,
      };
      axios(options)
        .then((response: AxiosResponse) => resolve(response.data))
        .catch((error: AxiosError) =>
          reject(error.response ? error.response.data : error.message),
        );
    });
  }
  /**
   *
   * @param url
   * @param headers
   */
  public static async patch(
    url: string,
    body: any,
    headers: any,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let options: AxiosRequestConfig = {
        method: 'PATCH',
        url: url,
        headers: headers,
        data: body,
      };
      axios(options)
        .then((response: AxiosResponse) => resolve(response.data))
        .catch((error: AxiosError) =>
          reject(error.response ? error.response.data : error.message),
        );
    });
  }
}


let Common = new Commons();
export {
    Common,
    RestService
}