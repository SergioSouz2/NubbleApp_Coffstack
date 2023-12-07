import axios from 'axios';

export const api = axios.create({
   baseURL: 'http://10.0.2.2:3333/',
   headers: {
      Authorization:
         'Bearer Mw.qufWL3zqdc7PpvKVloGAiMlS0MSxGFf1NX85C8d8h8PXYj91YAQIz2BxIqBK',
   },
});
