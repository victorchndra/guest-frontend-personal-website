import moment from "moment"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Blog = () => {

    const [posts, setPosts] = useState({})

    async function getPosts() {
        const res = await fetch('/api/blogs')
        const data = await res.json()

        
        if(res.ok) {
            setPosts(data)
        }
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

    const CategoryList = [
        'Technology',
        'Investment',
        'Insights',
    ]

    return (
        <div className=" md:px-[150px] flex flex-col">
            <div className="md:flex md:justify-center md:mt-4">
                <div className=" flex justify-between overflow-x-auto max-w-max no-scrollbar space-x-3 md:w-full">
                    {CategoryList.map((category, index) => (
                        <div key={index} className={`px-3 py-1 border rounded-xl md:border-transparent md:hover:underline ${index === 0 && 'ml-[30px] md:ml-0'}`}>
                            <Link className={`uppercase text-sm font-bold`}>{category}</Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`hidden lg:block font-cormorant-infant px-[30px] mt-8`}>
                <div className={`bg-slate-200 h-96 flex flex-col justify-end p-4 bg-cover relative`} 
                    style={{ backgroundImage: `url(http://127.0.0.1:8000/storage/${posts.data && posts.data[0].cover_img})`, backgroundPosition: 'center' }}>

                    {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div> */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 from-30% to-black/10 to-50%"></div>
                    <div className="relative z-10">
                        <p className="uppercase text-sm font-bold text-white bg-red-500 px-2 flex max-w-fit justify-center items-center rounded-lg">{posts.data && posts.data[0].category.name}</p>
                        <h1 className="text-white font-medium text-2xl capitalize mt-1">{posts.data && posts.data[0].title}</h1>
                        <p className="text-sm mt-2 text-gray-300">{posts.data && moment(posts.data[0].created_at).format('DD/MM/YYYY, HH:mm A')}</p>
                    </div>
                </div>
            </div>

            <div className="flex px-[30px] space-x-4">
                {posts.data && posts.data.slice(1,5).map((post) => (
                    <div key={post.id} className={`hidden lg:block font-cormorant-infant mt-4 space-y-6 w-96`}>
                    
                        <div className={`bg-slate-200 h-64 flex flex-col justify-end p-4 bg-cover relative`}
                            style={{ backgroundImage: `url(http://127.0.0.1:8000/storage/${post.cover_img})`, backgroundPosition: 'center' }}>
                            {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div> */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 from-30% to-black/10 to-50%"></div>
                            <div className="relative z-10">
                                <p className="uppercase text-sm font-bold text-white bg-red-500 px-2 flex max-w-fit justify-center items-center rounded-lg">{post.category.name}</p>
                                <h1 className="text-white font-medium text-2xl capitalize mt-1">{truncateString(post.title, 20)}</h1>
                                <p className="text-sm mt-2 text-gray-300">{moment(post.created_at).format('DD/MM/YYYY, HH:mm A')}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* All Posts */}
            <div className="">
                <div className="mt-8 px-[30px] flex justify-between items-center font-cormorant-infant">
                    <h1 className=" font-medium text-2xl">All Posts</h1>
                    <select className="select select-bordered max-w-xs select-sm">
                        <option selected>Latest</option>
                        <option>Oldest</option>
                    </select>
                </div>

                {posts.data && posts.data.map((post) => (
                    <div key={post.id} className="font-cormorant-infant flex flex-col items-center justify-center px-[30px] md:flex-row mt-4">
                        <div className="bg-slate-200 w-full h-48 md:w-[120px] md:h-[100px] md:mr-4 bg-cover"
                            style={{ backgroundImage: `url(http://127.0.0.1:8000/storage/${post.cover_img})`, backgroundPosition: 'center' }}>
                        </div>
                        <div className="border-b-[1px] md:self-start mt-2 w-full">
                            <p className="uppercase text-sm font-bold text-red-500">{post.category.name}</p>
                            <h1 className="font-medium text-2xl capitalize mt-1">{truncateString(post.title, 70)}</h1>
                            <p className="text-sm mt-4 mb-1 text-gray-600">{moment(post.created_at).format('DD/MM/YYYY, HH:mm A')}</p>
                        </div>
                    </div>
                ))}

                {/* <div className="font-cormorant-infant flex flex-col items-center justify-center px-[30px] md:flex-row mt-4">
                    <div className="bg-slate-200 w-full h-48 md:w-[120px] md:h-[100px] md:mr-4">
                        [image]moment(post.created_at).format('DD/MM/YYYY, HH:mm')
                    </div>
                    <div className="border-b-[1px] md:self-start md:w-full mt-2">
                        <p className="uppercase text-sm font-bold text-red-500">Technology</p>
                        <h1 className="font-medium text-2xl">6 Tampilan Awet Muda Luna Maya, Jadi Lady in Red Bergaya Vintage...</h1>
                        <p className="text-sm mt-4 mb-1 text-gray-600">29/05/2023, 06:00 WIB</p>
                    </div>
                </div> */}
            </div>

            {/* Footer */}
            <div className="my-8 flex px-[30px] justify-center md:justify-end font-cormorant-infant">
                Victor©️2024
            </div>
        </div>
    )
}

export default Blog