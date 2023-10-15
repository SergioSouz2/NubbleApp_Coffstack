import axios from 'axios';

export const api = axios.create({
   baseURL: 'http://10.0.2.2:3333/',
   headers: {
      Authorization:
         'Bearer Mw.wO3U4TGUZ-82Ey8OO12aCGFngO_YRi6mOBKJbanvb5nKDNz6l5X1Mtg9euZq',
   },
});
