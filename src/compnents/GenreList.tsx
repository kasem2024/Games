import useGenres from "../hook/useGenres"
import Loading from "./Loading";
import getCroppedImageUrl from '../services/cropImages'
import useStore from '../store'
import { cn } from "../utils/cn";
const GenreList = () => {

    const {data , error , isLoading} = useGenres();
    const selectedGenres = useStore((s)=> s.gameQuery.genreId);
    const setSelectedGenres = useStore((s)=>s.setGenreId)
    if(error) return null
    
  return (
   <div className="pl-2 lg:pl-4 xl:pl-6 mt-14">
    {isLoading ? <Loading/>:(
        <div>
            <p className="text-2xl font-bold text-green-700">Genres</p>
            {data?.results?.map((genre)=>
                <div key={genre.id} 
                className="space-y-3 lg:space-y-6 relative  h-[60px] group  flex items-center justify-start "
                 onClick={()=>{setSelectedGenres(genre.id) 
                 console.log(genre.id)} }>
                    
                    <div className="bg-violet-600 w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] rounded-full   absolute left-1 md:left-2 lg:left-4 xl:left-6 top-[50%] -translate-y-[10%] z-10">
                    <img className="w-full h-full rounded-full z-10" src={getCroppedImageUrl(genre.image_background)}/></div>
                    <div className="pl-10 md:pl-12 lg:pl-16 xl:pl-20 z-10 text-start ">{genre.name}</div>
                    <div className={cn(selectedGenres === genre.id? 'w-full h-full skew-x-6':'w-0 h-0 lg:w-2 lg:h-8',"absolute left-0 top-[50%] -translate-y-[65%] bg-green-700 group-hover:w-full group-hover:h-full z-0 duration-700 shadow-lg rounded-md ")}></div>
                </div>
            )}
        </div>
    )}
   </div>
  )
}

export default GenreList