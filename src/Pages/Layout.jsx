import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const Layout = () => {
  return (
    <>
        <header>
          <Navbar />
        </header>

        <main>
          <Outlet />
        </main>

        <footer>
          <div className="px-[30px] md:px-[90px] pb-12 flex flex-col">
            <span>“If it's important to you, you'll find a way. If it's not, you'll find an excuse.”</span>
            <span>– Ryan Blair</span>
          </div>
        </footer>
    </>
  )
}

export default Layout