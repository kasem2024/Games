
const LoadingCardGames = () => {
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
<>
    {skeletons.map((skeleton)=>  
        <div key={skeleton} className="hover:scale-105 animate-pulse rounded-xl h-[400px]  shadow-lg bg-primary col-span-12 w-[97%]  md:col-span-6 lg:col-span-4 xl:col-span-3  ">
          <div className="h-[70%] "></div>
          <div className="rounded-md h-[30%] px-9 pt-6 bg-custom-reverse  flex-col items-start justify-center space-y-2">
              <div className=" w-full h-[7px] bg-primary"></div>
              <div className=" w-full h-[7px] bg-primary"></div>
              <div className=" w-[80%] h-[7px] bg-primary"></div>
          </div>
      </div>)}
</>
  )
}

export default LoadingCardGames