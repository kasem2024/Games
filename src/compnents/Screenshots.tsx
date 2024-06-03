import useScreenshots from "../hook/useScreenshots"
import Loading from "./Loading";



const Screenshots = ({gameId}:{gameId:number}) => {

    const {data  , isLoading} = useScreenshots(gameId!);

    if(isLoading) return <Loading/>
    console.log(data)
  return (
    <div className="flex flex-wrap items-center justify-center space-x-2 space-y-2">
        {data?.results.map((obj)=><div className="w-[300px] h-[300px] space-x-2">
            <img src={obj.image} className="w-full h-full"/>
        </div>)}
    </div>
  )
}

export default Screenshots