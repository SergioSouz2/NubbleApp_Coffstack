import {PageAPI, api} from '@api';
import {PostApi} from './postTypes';

async function getList(): Promise<PageAPI<PostApi>> {
   //TUDO: simular um delay na API

   const response = await api.get<PageAPI<PostApi>>('user/post');
   return response.data;
}

export const postApi = {
   getList,
};
