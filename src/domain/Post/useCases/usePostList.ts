import {useState, useEffect} from 'react';
import {Post, postService} from '@domain';

export function usePostList() {
   const [postList, setPostList] = useState<Post[]>([]);
   const [error, setError] = useState<boolean | null>(null);
   const [loading, setLoading] = useState(true);

   async function fetchData() {
      try {
         setError(null);
         setLoading(true);

         const list = await postService.getList();
         setPostList(list);
      } catch (err) {
         console.log('ERROR: ', err);
         setError(true);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

   return {
      postList,
      error,
      loading,
      refetch: fetchData,
   };
}
