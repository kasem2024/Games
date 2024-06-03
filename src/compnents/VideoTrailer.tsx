import useTrailer from "../hook/useTrailer"
import Loading from "./Loading"


const VideoTrailer = ({gameId}:any) => {
    const {data , error , isLoading} = useTrailer(gameId!);
    console.log(data)
    if(isLoading){
        return <Loading/>
    }
    if(error  || !data){
        throw error
    }
    const video = data?.results[1]?.data.max
  return (
    <div >
      { video? <video src={video} controls
        />:''}
    </div>
  )
}

export default VideoTrailer