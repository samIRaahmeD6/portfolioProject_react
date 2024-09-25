import { Link } from 'react-scroll'
import { IoHomeOutline } from 'react-icons/io5'
import { IoPersonOutline } from 'react-icons/io5'
import { RiProgress1Line } from 'react-icons/ri'
import { TbBulb } from 'react-icons/tb'
import { AiOutlineMessage } from 'react-icons/ai'

const Menu = () => {
  return (
    <div className='Menu'>
      <Link to='Home' spy={true} smooth={true} offset={50} duration={500}>
        <IoHomeOutline />
      </Link>
      <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
        <IoPersonOutline />
      </Link>
      <Link
        to='experience-section'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <RiProgress1Line />
      </Link>
      <Link to='skills' spy={true} smooth={true} offset={50} duration={500}>
        <TbBulb />
      </Link>
      <Link to='Contact' spy={true} smooth={true} offset={50} duration={500}>
        <AiOutlineMessage />
      </Link>
    </div>
  )
}

export default Menu
