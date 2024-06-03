
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';

const Icons = (item : {item:string}) => {
    console.log(item)
  return (
    <div className=''>
    {item.item === 'pc' ? <FaWindows size={25} color='blue'/>
    :item.item === 'playstation'? <FaPlaystation  size={25} color='orange'/>
    :item.item==='xbox'?<FaXbox size={25} color='gray'/>
    :item.item==='nintendo'?<SiNintendo size={25} color='yellow'/>
    :item.item === 'mac'? <FaApple size={25} color='red'/>
    :item.item=== 'linux'? <FaLinux size={25} color='green'/>
    :item.item === 'android'? <FaAndroid size={25} color='green'/>
    :item.item ==='ios'? <MdPhoneIphone size={25} color='green'/>
    : <BsGlobe/>}
    </div>
  )
}

export default Icons