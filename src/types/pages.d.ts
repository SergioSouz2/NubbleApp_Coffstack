export interface MetaDataPage {
   total: number;
   perPage: number;
   currentPage: number;
   lastPage: number;
   firstPage: number;
   hasLastPage: boolean;
   hasNextPage: boolean;
}

export interface Page<Data> {
   meta: MetaDataPage;
   data: Data[];
}
