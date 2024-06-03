
import useGames from '../hook/useGames'
import CardGames from './CardGames'
import GridProvider from './GridProvider'
import LoadingCardGames from './LoadingCardGames'


const Games = () => {
const {data , isLoading , fetchNextPage,  hasNextPage,}   = useGames()

  return (
     <>
       {isLoading ?   <GridProvider>
                        <LoadingCardGames/>  
                      </GridProvider>:
       <CardGames data={data} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage}/>
       } 
     </>
   
  )
}

export default Games