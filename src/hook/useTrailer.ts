import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer"
import ApiClient from "../services/apiClient"

const useTrailer = (gameId:number)=>{
    const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
    return useQuery({
        queryKey:['trailer', gameId],
        queryFn:apiClient.getAll
    })
}
export default useTrailer