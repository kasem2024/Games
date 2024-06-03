
import InfiniteScroll from 'react-infinite-scroll-component';
import GridProvider from './GridProvider';
import React from 'react';
import {  Tpage } from '../services/apiClient';
import GameContent from './GameContent';

interface Props {data  :any , hasNextPage:boolean  ,fetchNextPage:()=> void}
    const CardGames = ({data  , hasNextPage, fetchNextPage }:Props ) => {
    console.log(data)
    const fetchCount = data?.pages.reduce((total : number,page :Tpage)=> page?.results.length + total ,0) || 0
  return (
    <InfiniteScroll
    dataLength={fetchCount} 
    next={()=>fetchNextPage()}
    hasMore={!!hasNextPage}
    loader={<div className=' loader2 '></div>}
    endMessage={
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
      </p>
    }
  >
    
   <GridProvider> {
        data?.pages.map((page :Tpage, idx : number )=> 
            <React.Fragment key={idx}> 
                {page.results.map((game :any)=>
                <GameContent game={game}/>
                )}
            </React.Fragment>
        )
    }
 </GridProvider>
  </InfiniteScroll>
  )
}

export default CardGames