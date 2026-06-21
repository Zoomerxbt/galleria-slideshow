import Logo from '../../public/logo.png'

const NavBar = () => {
  return (
    <header className="flex justify-between items-center p-6 ">
      <img className="w-28.25 " src={Logo} alt="Logo" />
      <button className="text-preset-5">START SLIDESHOW</button>
    </header>
  )
}

export default NavBar
