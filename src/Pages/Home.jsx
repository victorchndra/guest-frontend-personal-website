/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import { ChevronsRight } from "lucide-react"
import ProjectList from "../Components/ProjectList"
import { useEffect, useState } from "react"
import moment from "moment"
import axios from "axios"

const Home = () => {

    const [posts, setPosts] = useState({})

    async function getPosts() {
        await axios.get('api/blogs')
            .then((res) => setPosts(res.data))
            .catch((error) => console.error('Error fetching posts:', error))
    }

    useEffect(() => {
        getPosts()
    }, [])

    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "..."
        } else {
            return str
        }
    }

  return (
    <>
        <div className="hidden md:block rounded-l-3xl" id="my-bg-image"></div>
        {/* About Section */}
        <section className="px-[30px] pt-[30px] flex flex-col md:px-[90px] md:pt-[30px] relative">
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
        <section className="px-[30px] pt-[24px] md:px-[90px] md:w-[650px] relative">
            <div className="flex flex-col">
                <ProjectList />
            </div>
        </section>

        {/* Blogs Section */}
        <section className="py-[30px] w-full relative" id="blog">
            <Link to={`/blog`} className="flex items-center hover:underline px-[30px] md:px-[90px]">
                Shared topics, visit my diary blog for more <ChevronsRight className="w-4 h-4"/>
            </Link>
            <div className="flex overflow-x-auto mt-[20px] space-x-4 md:justify-between max-w-max no-scrollbar font-cormorant-infant">
                {posts.data ? posts.data.slice(0, 5).map((post) => (
                    <div key={post.id} 
                        className="flex p-4 justify-start items-end min-w-[240px] w-[240px] h-[300px] bg-gray-200 hover:shadow-xl transition-all duration-300 ml-[30px] md:ml-[90px] cursor-pointer bg-cover relative"
                        style={{ backgroundImage: `url(http://127.0.0.1:8000/storage/${post.cover_img})`, backgroundPosition: 'center' }}>
                        
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 from-30% to-black/10 to-50%"></div>
                        <div className="flex flex-col relative z-10" >
                            {/* <img src={`http://127.0.0.1:8000/storage/${post.cover_img}`} /> */}
                            <p className="uppercase text-sm font-bold text-white bg-red-500 px-2 flex max-w-fit justify-center items-center rounded-lg">Technology</p>
                            <h1 className="font-medium text-2xl text-white mt-1 capitalize">{truncateString(post.title, 40)}</h1>
                            <p className="text-sm mt-2 text-gray-300">{moment(post.created_at).format('DD/MM/YYYY, HH:mm A')}</p>
                        </div>
                    </div>
                )) : (
                    <>
                    <div className="flex justify-center items-center min-w-[240px] h-[300px] bg-gray-200 hover:shadow-xl transition-all duration-300 ml-[30px] md:ml-[90px]"></div>
                    <div className="flex justify-center items-center min-w-[240px] h-[300px] bg-gray-200 hover:shadow-xl transition-all duration-300"></div>
                    <div className="flex justify-center items-center min-w-[240px] h-[300px] bg-gray-200 hover:shadow-xl transition-all duration-300"></div>
                    <div className="flex justify-center items-center min-w-[240px] h-[300px] bg-gray-200 hover:shadow-xl transition-all duration-300"></div>
                    <div className="flex justify-center items-center min-w-[240px] h-[300px] bg-gray-200 hover:shadow-xl transition-all duration-300 mr-[30px] md:mr-[90px]"></div>
                    </>
                )}
            </div>
        </section>

        {/* Footer Section */}
        <div className="px-[30px] md:px-[90px] pb-12 flex flex-col w-fit relative">
            <span className="bg-[#FCFCFC] pr-1">“If it's important to you, you'll find a way. If it's not, you'll find an excuse.”</span>
            <span className="bg-[#FCFCFC]">– Ryan Blair</span>
        </div>
    </>
  )
}

export default Home