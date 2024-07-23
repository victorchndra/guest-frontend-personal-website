import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className='p-[30px] flex flex-col md:justify-between md:flex-row z-0 md:z-[1] bg-white w-full left-0'>
            <div className="flex font-bold md:pl-0 justify-between items-center">
                <Link to={`/`} className="hover:cursor-pointer">VICTOR CHANDRA</Link>
                {showMenu === false 
                    ? <button onClick={toggleMenu}><Menu className="block md:hidden cursor-pointer" /></button>  
                    : <button onClick={toggleMenu}><X className="block md:hidden cursor-pointer" /></button>}
            </div>

            <a href="#" className={`flex items-center justify-center mt-6 md:mt-0 hover:underline ${showMenu === false ? 'hidden md:block' : 'block'}`}>
                Sharing my thoughts & insights.
            </a>

            <span className={`flex mt-2 md:mt-0 items-center justify-center ${showMenu === false ? 'hidden md:block' : 'block'}`}>
                For more follow me on:
            </span>
            
            <div className={`md:space-x-8 md:space-y-0 md:mt-0 space-y-1 mt-2 flex flex-col md:flex-row items-center justify-center ${showMenu === false ? 'hidden md:block' : 'block'}`}>
                <a href="#" className="hover:underline">Instagram</a>
                <a href="#" className="hover:underline">Twitter X</a>
                <a href="#" className="hover:underline">LinkedIn</a>
                <a href="#" className="hover:underline">GitHub</a>
            </div>
        </nav>
    )
}

export default Navbar