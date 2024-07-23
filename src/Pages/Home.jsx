/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import { ChevronsRight } from "lucide-react"
import ProjectList from "../Components/ProjectList"

const Home = () => {
  return (
    <>
        <div className="my-bg-image hidden md:block rounded-l-3xl"></div>
        {/* About Section */}
        <section className="px-[30px] pt-[30px] flex flex-col md:px-[90px] md:pt-[30px]">
            <Link to={`/about`} className="flex items-center hover:underline">
                Read more about me <ChevronsRight className="w-4 h-4"/>
            </Link>
            <div className="w-[250px] md:w-[620px]">
                <h1 className="font-cormorant-infant text-[32px]">
                    <span className="bg-[#FCFCFC]">I’m Victor — a tech-savvy which focuses on Web2 Development as Full Stack Developer</span>
                </h1>
            </div>
        </section>

        {/* Projects Section */}
        <section className="px-[30px] pt-[24px] md:px-[90px] md:w-[650px]">
            <div className="flex flex-col">
                <ProjectList />
            </div>
        </section>

        {/* Blogs Section */}
        <section className="py-[30px] w-full" id="blog">
            <Link to={`/blog`} className="flex items-center hover:underline px-[30px] md:px-[90px]">
                Shared topics, visit my diary blog for more <ChevronsRight className="w-4 h-4"/>
            </Link>
            <div className="flex overflow-x-auto mt-[20px] space-x-4 md:justify-between max-w-max no-scrollbar">
                <div className="flex justify-center items-center min-w-[240px] h-[300px] bg-gray-200 hover:shadow-xl transition-all duration-300 ml-[30px] md:ml-[90px]">cardlist1</div>
                <div className="flex justify-center items-center min-w-[240px] h-[300px] bg-gray-200 hover:shadow-xl transition-all duration-300">cardlist2</div>
                <div className="flex justify-center items-center min-w-[240px] h-[300px] bg-gray-200 hover:shadow-xl transition-all duration-300">cardlist3</div>
                <div className="flex justify-center items-center min-w-[240px] h-[300px] bg-gray-200 hover:shadow-xl transition-all duration-300">cardlist4</div>
                <div className="flex justify-center items-center min-w-[240px] h-[300px] bg-gray-200 hover:shadow-xl transition-all duration-300 mr-[30px] md:mr-[90px]">cardlist5</div>
            </div>
        </section>

        {/* Footer Section */}
        <div className="px-[30px] md:px-[90px] pb-12 flex flex-col w-fit ">
            <span className="bg-[#FCFCFC] pr-1">“If it's important to you, you'll find a way. If it's not, you'll find an excuse.”</span>
            <span className="bg-[#FCFCFC]">– Ryan Blair</span>
        </div>
    </>
  )
}

export default Home