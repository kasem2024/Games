import Games from "../compnents/Games"
import GenreList from "../compnents/GenreList"
import HeadingGames from "../compnents/HeadingGames"


const HomePage = () => {
  return (
    <div className="bg-custom h-screen grid grid-cols-12 mt-2 ">
        <div className="hidden md:block col-span-2 bg-custom text-custom"><GenreList/></div>
        <div className="col-span-12 md:col-span-10  bg-custom text-custom ">
            <HeadingGames/>
            <Games/>
        </div>
    </div>
  )
}
export default HomePage