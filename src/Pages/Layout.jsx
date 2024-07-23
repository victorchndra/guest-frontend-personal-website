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
        </main>
    </>
  )
}

export default Layout