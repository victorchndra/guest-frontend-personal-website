// import { ChevronsRight } from "lucide-react"

import { Link } from "react-router-dom"

const Blog = () => {

    const CategoryList = [
        'Technology',
        'Investment',
        'Insights',
    ]

    return (
        <div className=" md:px-[90px] flex flex-col">
            <div className="md:flex md:justify-center">
                <div className=" flex justify-between overflow-x-auto max-w-max no-scrollbar space-x-3 md:w-full">
                    {CategoryList.map((category, index) => (
                        <div key={index} className={`px-3 py-1 border rounded-xl md:border-transparent md:hover:underline ${index === 0 && 'ml-[30px] md:ml-0'}`}>
                            <Link className={`uppercase text-sm font-bold`}>{category}</Link>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className=" p-[30px] flex justify-between items-end font-cormorant-infant">
                <h1 className=" font-medium text-2xl">All Posts</h1>
                <select>
                    <option>Latest</option>
                    <option>Oldest</option>
                </select>
            </div>

            {/* All Post */}
            <div className="font-cormorant-infant flex flex-col items-center justify-center px-[30px] md:flex-row">
                <div className="bg-slate-200 w-full h-48 md:w-[120px] md:h-[100px] md:mr-4">
                    [image]
                </div>
                <div className="border-b-[1px] mb-4 md:self-start md:w-full">
                    <p className="uppercase text-sm font-bold text-red-500">Technology</p>
                    <h1 className="font-medium text-2xl">6 Tampilan Awet Muda Luna Maya, Jadi Lady in Red Bergaya Vintage...</h1>
                    <p className="text-sm mt-4 mb-1 text-gray-600">29/05/2023, 06:00 WIB</p>
                </div>
            </div>
        </div>
    )
}

export default Blog