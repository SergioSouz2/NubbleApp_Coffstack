//usePaginateList

import { Page } from '@types';
import {useState, useEffect} from 'react';

export function usePaginateList<Data>(getList:(page:number) => Promise<Page<Data>> ) {
   const [data, setData] = useState<Data[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<boolean | null>(null);
   const [page, setPage] = useState(1);
   const [hasNextPage, setHasNextPage] = useState(true);

   async function fetchInitialData() {
      try {
         setError(null);
         setLoading(true);

         const {data, meta} = await getList(1);
         setData(data);

         //TODOS: validar se tem mais paginas
         if (meta.hasNextPage) {
            setPage(2);
         } else {
            setHasNextPage(false);
         }
      } catch (err) {
         setError(true);
      } finally {
         setLoading(false);
      }
   }

   async function fetchNextPage() {
      if (loading || !hasNextPage) return;
      try {
         setLoading(true);
         const {data, meta} = await getList(page);
         setData(prev => [...prev, ...data]);

         if (meta.hasNextPage) {
            setPage(prev => prev + 1);
         } else {
            setHasNextPage(false);
         }
      } catch (er) {
         setError(true);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      fetchInitialData();
      
   }, []);

   return {
      data,
      error,
      loading,
      refresh: fetchInitialData,
      fetchNextPage,
   };
}
