import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
   const postPageAPI = await postApi.getList({page: 2});

   // throw new Error('Error de teste');

   return postPageAPI.data.map(postAdapter.toPost);
   // return [];
}

export const postService = {
   getList,
};
