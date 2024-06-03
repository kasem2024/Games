
import { Link } from 'react-router-dom'
import Game from '../entities/Game'

import Icons from './Icons'
import { cn } from '../utils/cn'
const GameContent = ({game}:{game:Game}) => {
    console.log(game.metacritic)
    const computedColor = game.metacritic > 90 ? 'bg-green-500 ' : game.metacritic > 80? 'bg-orange-500':game.metacritic > 70?'bg-cyan-500':game.metacritic>60?'bg-violet-500':'bg-yellow-500'
  return (
    <Link  to={`/games/${game.slug}`} className='  bg-primary flex flex-col hover:scale-105 duration-200 items-start justify-center rounded-xl max-h-[400px] shadow-lg col-span-12 w-[97%]  md:col-span-6 lg:col-span-4 xl:col-span-3 ' key={game.id}>
      
         <div className='shadow-md rounded-lg h-[270px] w-full overflow-hidden hover:scale-95 duration-200'><img src={game.background_image} className='w-full h-full' alt="" /></div>
         <div className='w-full flex justify-between items-center px-6 py-2'>
             <p className='flex item-center justify-start space-x-5  w-[70%]'>{game.parent_platforms.map((item)=><div ><Icons item={item.platform.slug}/></div>)}</p>
             <div className={cn(computedColor , 'px-1 py-0 rounded-full  ')}>{game.metacritic}</div>
         </div>
         <div className='px-6 py-3 text-base md:text-lg lg:text-xl text-white xl:text-2xl font-bold'>{game.name}</div>
 
    </Link>
  )
}

export default GameContent