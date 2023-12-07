import {useState, useEffect} from 'react';
import {Post, postService, usePaginateList} from '@domain';

export function usePostList() {
   return usePaginateList<Post>(postService.getList)
}
