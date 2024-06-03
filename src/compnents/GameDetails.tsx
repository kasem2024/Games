import Game from "../entities/Game"
import { cn } from "../utils/cn"


const GameDetails = ({game}:{game:Game}) => {
    const computedColor = game.metacritic > 90 ? 'bg-green-500 ' : game.metacritic > 80? 'bg-orange-500':game.metacritic > 70?'bg-cyan-500':game.metacritic>60?'bg-violet-500':'bg-yellow-500'
  return (
    <div className="grid grid-cols-12 place-content-start relative top-0">
     <div className="col-span-12 lg:col-span-6 lg:px-9  ">
      <div>
         <div className="shadow-lg rounded-md px-6 py-2 bg-custom-reverse text-custom-reverse  text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center">platforms</div>
         <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold px-4 py-2 lg:px-6 lg:py-4">{game.parent_platforms.map((platforms)=><div>{platforms.platform.name}</div>)}</div>
      </div>
       <div>
        <div className="shadow-lg rounded-md px-6 py-2 bg-custom-reverse text-custom-reverse  text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center">Genres</div>
        <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold px-4 py-2 lg:px-6 lg:py-4">{game.genres.map((genre)=> <div>{genre.name}</div>)}</div>
       </div>
     </div>
    <div className="col-span-12 lg:col-span-6 lg:px-9 ">
  {  game.metacritic &&    <div className="">
          <div className="shadow-lg rounded-md  px-6 py-2 bg-custom-reverse text-custom-reverse  text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center">metascores</div>
          <div className={cn('mt-3 mb-16 ml-6 text-base md:text-lg lg:text-xl xl:text-2xl font-bold px-2 py-1 lg:px-4 lg:py-2 rounded-full w-fit', computedColor) }>{game.metacritic}</div>
        </div>}
      {game.publishers && <div>
         <div className="shadow-lg rounded-md px-6 py-2 bg-custom-reverse text-custom-reverse  text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center">Publishers</div>
         <div className='text-base md:text-lg lg:text-xl xl:text-2xl font-bold px-4 py-2 lg:px-6 lg:py-4'>{game.publishers.map((p )=>(<div>{p.name}</div>))}</div>
       </div>}
    </div>
    </div>
  )
}

export default GameDetails