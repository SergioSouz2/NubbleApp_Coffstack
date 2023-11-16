import {PageAPI, PageParams, api} from '@api';
import {PostApi} from './postTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostApi>> {
   const response = await api.get<PageAPI<PostApi>>('user/post', {
      params,
   });
   return response.data;
}

export const postApi = {
   getList,
};
