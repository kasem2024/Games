import { useInfiniteQuery } from "@tanstack/react-query"
import ApiClient, { FetchResponse } from "../services/apiClient"
import Game from "../entities/Game"
import useStore from "../store"


const apiClient = new ApiClient<Game>('/games')

const useGames = ()=>
  { 
    const gameQuery = useStore((store)=> store.gameQuery)
    const fetchPage =(pageParam :number)=>{
      return apiClient.getAll({
         params: {
           genres: gameQuery.genreId,
           parent_platforms: gameQuery.platformId,
           ordering: gameQuery.sortOrder,
           search: gameQuery.searchText,
           page: pageParam,
         },
       })
     } 
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games',gameQuery],
        queryFn: ({pageParam }:any) =>fetchPage(pageParam)
         ,
        initialPageParam: 1,
        getNextPageParam: (lastPage , allPages ) => {
          return lastPage.next ?allPages.length + 1  : undefined;
        },
        staleTime: 9000 ,
      })
}


export default useGames