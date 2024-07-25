// import { ChevronsRight } from "lucide-react"

import { Link } from "react-router-dom"

const Blog = () => {

    const CategoryList = [
        'Technology',
        'Investment',
        'Insights',
    ]

    const pinnedPost = [
        {
            title: '6 Tampilan Awet Muda Luna Maya, Jadi Lady in Red Bergaya Vintage Era 60an dengan Outfit Puluhan Juta',
            category: 'Technology',
            created_at: '29/05/2023, 06:00 WIB'
        },
        {
            title: '6 Tampilan Awet Muda Luna Maya...',
            category: 'Technology',
            created_at: '29/05/2023, 06:00 WIB'
        },
        {
            title: '6 Tampilan Awet Muda Luna Maya...',
            category: 'Technology',
            created_at: '29/05/2023, 06:00 WIB'
        },
        {
            title: '6 Tampilan Awet Muda Luna Maya...',
            category: 'Technology',
            created_at: '29/05/2023, 06:00 WIB'
        },
        {
            title: '6 Tampilan Awet Muda Luna Maya...',
            category: 'Technology',
            created_at: '29/05/2023, 06:00 WIB'
        },
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
                <div className={`bg-slate-200 h-72 flex flex-col justify-end p-4`}>
                    {/* <div>[image]</div> */}
                    <p className="uppercase text-sm text-red-500 font-bold">{pinnedPost[0].category}</p>
                    <h1 className="font-medium text-2xl">{pinnedPost[0].title}</h1>
                    <p className="text-sm mt-2 text-gray-600">{pinnedPost[0].created_at}</p>
                </div>
            </div>

            <div className="flex px-[30px] space-x-4">
                {pinnedPost.slice(1).map((post, index) => (
                    <div key={index} className={`hidden lg:block font-cormorant-infant mt-4 space-y-6 w-96`}>
                        <div className={`bg-slate-200 h-64 flex flex-col justify-end p-4`}>
                            {/* <div>[image]</div> */}
                            <p className="uppercase text-sm text-red-500 font-bold">{post.category}</p>
                            <h1 className="font-medium text-2xl">{post.title}</h1>
                            <p className="text-sm mt-2 text-gray-600">{post.created_at}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* All Posts */}
            <div className="">
                <div className="mt-8 px-[30px] flex justify-between items-center font-cormorant-infant">
                    <h1 className=" font-medium text-2xl">All Posts</h1>
                    <select>
                        <option>Latest</option>
                        <option>Oldest</option>
                    </select>
                </div>

                <div className="font-cormorant-infant flex flex-col items-center justify-center px-[30px] md:flex-row mt-4">
                    <div className="bg-slate-200 w-full h-48 md:w-[120px] md:h-[100px] md:mr-4">
                        [image]
                    </div>
                    <div className="border-b-[1px] md:self-start md:w-full mt-2">
                        <p className="uppercase text-sm font-bold text-red-500">Technology</p>
                        <h1 className="font-medium text-2xl">6 Tampilan Awet Muda Luna Maya, Jadi Lady in Red Bergaya Vintage...</h1>
                        <p className="text-sm mt-4 mb-1 text-gray-600">29/05/2023, 06:00 WIB</p>
                    </div>
                </div>
                <div className="font-cormorant-infant flex flex-col items-center justify-center px-[30px] md:flex-row mt-4">
                    <div className="bg-slate-200 w-full h-48 md:w-[120px] md:h-[100px] md:mr-4">
                        [image]
                    </div>
                    <div className="border-b-[1px] md:self-start md:w-full mt-2">
                        <p className="uppercase text-sm font-bold text-red-500">Technology</p>
                        <h1 className="font-medium text-2xl">6 Tampilan Awet Muda Luna Maya, Jadi Lady in Red Bergaya Vintage...</h1>
                        <p className="text-sm mt-4 mb-1 text-gray-600">29/05/2023, 06:00 WIB</p>
                    </div>
                </div>
                <div className="font-cormorant-infant flex flex-col items-center justify-center px-[30px] md:flex-row mt-4">
                    <div className="bg-slate-200 w-full h-48 md:w-[120px] md:h-[100px] md:mr-4">
                        [image]
                    </div>
                    <div className="border-b-[1px] md:self-start md:w-full mt-2">
                        <p className="uppercase text-sm font-bold text-red-500">Technology</p>
                        <h1 className="font-medium text-2xl">6 Tampilan Awet Muda Luna Maya, Jadi Lady in Red Bergaya Vintage...</h1>
                        <p className="text-sm mt-4 mb-1 text-gray-600">29/05/2023, 06:00 WIB</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="my-8 flex px-[30px] justify-center md:justify-end font-cormorant-infant">
                Victor©️2024
            </div>
        </div>
    )
}

export default Blog