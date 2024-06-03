import { useParams } from "react-router-dom"
import useGame from "../hook/useGame";
import Loading from "../compnents/Loading";
import Introduction from "../compnents/Introduction";
import GameDetails from '../compnents/GameDetails'
import { ArrowBigDownDash } from "lucide-react";
import { motion } from "framer-motion";
import VideoTrailer from "../compnents/VideoTrailer";
import Screenshots from "../compnents/Screenshots";
import { useRef, useState } from "react";
const PageDetails = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollDown = ()=>{
      ref.current?.scrollIntoView({behavior:'smooth'})
  }
  const [clicked , setClicked] = useState(false)
  const {slug} = useParams();
  const {data:game , isLoading , error} = useGame(slug!);
  console.log(game )
  if(isLoading) return <Loading/>
  if(error || !game) throw error
  const gameId = game.id
  return (
    <div className="text-custom overflow-hidden">
        <div className="flex justify-center items-start h-screen relative flex-wrap">
         {!clicked &&<motion.div 
          onClick={()=>{
            scrollDown()
            setClicked(true)
          }}
          initial={{y:10}} animate={{y:-30 }} whileHover={{color:'green' }} transition={{repeat:Infinity }} className=" hidden md:block cursor-pointer absolute bottom-[130px] right-[50px]"><ArrowBigDownDash size={80} /></motion.div>}
          <div className="md:w-[50%] p-2"><Introduction game={game}/></div>
          <div className="md:w-[50%] p-2 mt-[50px] w-full  md:mt-[200px]"><GameDetails game={game}/></div>
        </div>
        <section 
          ref={ref}
         className="w-[100vw] h-[100vh] m-auto flex items-center justify-center rounded-lg overflow-hidden flex-wrap">
            <div className="md:w-[50vw] md:h-[50vh]  pl-5">
              <VideoTrailer gameId={gameId}/>
            </div>
          <div className="w-full md:w-[50vw] md:h-[50vh] md:mt-[-400px]"><Screenshots gameId={gameId}/></div>
        </section> 
    </div>
  )
}

export default PageDetails