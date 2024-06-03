import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/apiClient"
import Genre from "../entities/Genre"
import genres from "../data/genres"
const apiClient = new ApiClient<Genre>('/genres')
const useGenres = ()=>{
return useQuery({
    queryKey:['Genres'],
    queryFn:apiClient.getAll,
    staleTime:1000 * 60,
    initialData:genres
})
}

export default useGenres