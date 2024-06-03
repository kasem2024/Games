import {  useTypewriter } from 'react-simple-typewriter'
import Game from '../entities/Game'
const Introduction = ({game}:{game:Game}) => {
    const [text] = useTypewriter({
        words: [game.description_raw],
        loop: 1,
        typeSpeed:30
      })
  return (
    <div>
        <div className='text-xl md:text-2xl xl:text-4xl font-bold text-green-700'>{game.name}</div>
        <div className='p-4'>
           <span className='text-base md:text-lg lg:text-xl xl:text-2xl '>{text}</span>
        </div>
       
    </div>
  )
}

export default Introduction