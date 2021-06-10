import {create} from 'apisauce';

export const api = create({
  baseURL: 'https://widergy-training-api.herokuapp.com',
  headers: {Accept: ['application/json', 'charset=utf-8']},
});
