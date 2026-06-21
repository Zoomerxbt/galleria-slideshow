import Logo from '../../public/logo.png'
import { Link } from '@tanstack/react-router'

const NavBar = () => {
  return (
    <header className="flex justify-between items-center mb-6.25 p-6 shadow-2xs">
      <Link to={`/`}>
        <img className="w-28.25 " src={Logo} alt="Logo" />
      </Link>
      <button className="text-preset-5">START SLIDESHOW</button>
    </header>
  )
}

export default NavBar
