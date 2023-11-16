import {PageAPI, api} from '@api';
import {PageParams, PostApi} from './postTypes';

async function getList(params: PageParams): Promise<PageAPI<PostApi>> {
   //TUDO: simular um delay na API

   const response = await api.get<PageAPI<PostApi>>('user/post', {
      params,
   });
   return response.data;
}

export const postApi = {
   getList,
};
