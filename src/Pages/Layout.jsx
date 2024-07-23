/* eslint-disable react/no-unescaped-entities */
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const Layout = () => {
  return (
    <>
        <header>
          <Navbar />
        </header>

        <main>
          <div className="my-bg-image hidden md:block rounded-l-3xl"></div>
          <Outlet />
          <div className="px-[30px] md:px-[90px] pb-12 flex flex-col w-fit">
            <span className="bg-white pr-1">“If it's important to you, you'll find a way. If it's not, you'll find an excuse.”</span>
            <span className="bg-white">– Ryan Blair</span>
          </div>
        </main>
    </>
  )
}

export default Layout