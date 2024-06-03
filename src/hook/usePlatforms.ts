import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/apiClient"
import Platform from "../entities/Platform"
import platforms from "../data/platforms"


const apiClient = new ApiClient<Platform>('/platforms/lists/parents')

const usePlatforms = ()=>{
    
return useQuery({
    queryKey:['platforms'],
    queryFn:apiClient.getAll,
    initialData:platforms,
    staleTime:1000*60 
})    
}
export default usePlatforms