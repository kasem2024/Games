import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import ApiClient from "../services/apiClient";
const apiClient = new ApiClient<Game>('/games');


const useGame = (slug: string)=>{
    return useQuery({
        queryKey:['games', slug],
        queryFn:()=>apiClient.get(slug)
    })
}

export default useGame