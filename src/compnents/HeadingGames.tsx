
import usePlatform from '../hook/usePlaform'
import useStore from '../store'
import useGenre from '../hook/useGenre'
import PlatformSelector from './PlatformSelector'
import OrderSelector from './OrderSelector'


const HeadingGames = () => {
    const platformId = useStore((s)=> s.gameQuery.platformId)
    const platform = usePlatform(platformId)
    const genreId = useStore((s)=> s.gameQuery.genreId)
    const genre = useGenre(genreId)
    console.log(genre)
    const headingName = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <div className=' font-bold pl-2 lg:pl-6 flex'>
    <div className='w-[50%] text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl'>
      { genre?.image_background && <div className='  w-full h-[200px] md:h-[250px] xl:h-[300px] relative shadow-lg rounded-lg  '>
            <img className=' h-full w-full overflow-hidden outline-none rounded-lg' src={genre?.image_background}/>
            <div className='absolute left-0 top-0 w-full h-full z-10 bg-black/40 hover:bg-black/20 rounded-lg duration-100'>    </div>
        </div>}
        <p>{headingName}</p>
    </div>
    <div className='w-[50%] lg:flex  space-y-3 lg:space-y-0 justify-evenly items-start space-x-1 pl-2 md:pl-10 lg:pl-14 xl:pl-20 pt-5  text-base md:text-lg lg:text-xl '>
       <PlatformSelector/>
       <OrderSelector/>
    </div>
    </div>
  )
}

export default HeadingGames