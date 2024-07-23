// import { ChevronsRight } from "lucide-react"

const Blog = () => {
  return (
    <>
        <div className="p-[30px] md:px-[90px] flex flex-col">
            <div className=" flex justify-between">
                <div className="flex items-center hover:underline cursor-pointer">
                    Latest Insights 
                    {/* <ChevronsRight className="w-4 h-4" /> */}
                </div>
                <div className="flex space-x-4">
                    <div>Search</div>
                    <div>Select Category</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog