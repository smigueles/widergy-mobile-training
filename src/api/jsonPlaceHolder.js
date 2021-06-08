import {create} from 'apisauce';

export const api = create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {Accept: ['application/json', 'charset=utf-8']},
});
