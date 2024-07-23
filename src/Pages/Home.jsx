import { Link } from "react-router-dom"
import { ChevronsRight } from "lucide-react"

const Home = () => {
  return (
    <>
        {/* About Section */}
        <section className="p-[30px] flex flex-col md:p-[90px]">
            <Link to={`/about`} className="flex items-center hover:underline">
                Read more about me <ChevronsRight className="w-4 h-4"/>
            </Link>
            <div className="w-[250px] md:w-[620px]">
                <h1 className="font-cormorant-infant text-[32px]">
                    I’m Victor — a tech-savvy which focuses on Web2 Development as Full Stack Developer
                </h1>
            </div>
        </section>

        {/* Projects Section */}
    </>
  )
}

export default Home