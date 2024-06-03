import { Gamepad2, Menu, Moon, Search, Sun } from "lucide-react"
import  {  FormEvent, useRef } from "react"
import useStore from "../store"

interface Props {
setDarkMode:(darkMode:boolean)=>void,
darkMode:boolean,
setShow: (val : boolean)=> void,
show:boolean,
}
    

const Navbar  = ({setDarkMode , darkMode, setShow , show}:Props) => {
  
  const setSearchText = useStore((s)=>s.setSearchText)
  const searchRef = useRef<HTMLInputElement>(null)
  const handleSearch=(e :FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setSearchText(searchRef?.current?.value!)
  }
  return (
    <div className="p-2 bg-custom text-custom flex items-center justify-between space-x-1 md:space-x-3">
        <div className="text-green-600 shadow-md rounded-md">
        <Gamepad2 size={40}  />
        </div>
        <div className=" flex-1 w-full sm:w-full ">
          <form onSubmit={handleSearch}>
              <input 
                ref={searchRef}
               type="text" className="bg-primary pl-12 py-2 rounded-xl w-full focus:outline-2 focus:outline-green-700 outline-none text-lg " placeholder="Search for 86.000 games" />
              <button className="absolute left-16 bg-primary top-4" type="submit"><Search /></button>
          </form>
        </div>
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 bg-primary text-white rounded-lg "
        >
         {darkMode?<Moon /> :   <Sun />}
        </button>
        <div className="block md:hidden cursor-pointer" onClick={()=> setShow(!show)}>
            <Menu/>
        </div>
      </div>
  </div>
  )
}

export default Navbar