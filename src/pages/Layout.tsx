import { Outlet } from "react-router-dom"
import Navbar from "../compnents/Navbar"
import { useEffect, useState } from "react";
import GenreList from "../compnents/GenreList";
import {motion} from 'framer-motion'

const Layout = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [show, setShow] = useState(false)
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
  return (
    <>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} setShow={setShow} show={show}/>
        {show && <motion.div initial={{x:-100}} animate={{x:0}}  className="md:hidden rounded-md bg-custom-reverse text-custom-reverse  w-[70vw] h-full absolute    z-50"><GenreList/></motion.div>}
        <div>
            <Outlet/>
        </div>
    </>
  )
}

export default Layout