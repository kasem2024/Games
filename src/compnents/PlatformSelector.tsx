import usePlatforms from "../hook/usePlatforms"
import useStore from "../store";


const PlatformSelector = () => {
  const {data } = usePlatforms();
  const setSelectedplatform = useStore((s)=> s.setPlatformId)
  return (
    <div className="  md:w-[50%]">
        <select name="platform" id="platform" className="bg-primary  border-none outline-none px-0 py-2 md:px-3 md:py-2 lg:px-6 lg:py-3 rounded-md shadow-md w-fit lg:w-[90%] "
        onChange={(e)=>
         { setSelectedplatform(parseInt(e.currentTarget?.value))
          console.log(e.currentTarget.value)}
        }>
            {data.results.map((platform)=><option key={platform.id} value={platform.id}>{platform.name}</option>)}
        </select>
    </div>
  )
}

export default PlatformSelector