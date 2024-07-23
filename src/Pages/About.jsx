import { ChevronsLeft } from "lucide-react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
        {/* Header */}
        <section className="px-[30px] pt-[30px] pb-[60px] flex flex-col md:px-[90px] md:pt-[30px] md:pb-[90px]">
            <Link to={`/`} className="flex items-center hover:underline">
                <ChevronsLeft className="w-4 h-4"/> Back to Home Page 
            </Link>
            <div className="w-[250px] md:w-[620px]">
                <h1 className="font-cormorant-infant text-[32px]">
                    <span className="bg-[#FCFCFC]">I’m Victor — a tech-savvy which focuses on Web2 Development as Full Stack Developer</span>
                </h1>
            </div>

            <div className=" space-y-4 mt-6 w-full md:w-[45%] font-cormorant-infant">
                <p>Hi, I am Victor. I am a software developer who solve business problems through programming. Also, I love to sharing my thoughts and insights with others, so this is my place to share them.</p>

                <p>Besides my competencies in web and mobile development, I also love to explore more about Artificial Intelligence and Blockchain technology, and how these technologies continue to evolve in the world. It is not impossible that I can be a part of one of those technological breakthroughs.</p>

                <p>Before I began my journey in software tech, I have experienced in several fields before such as dropshipper, reseller, graphic designer, sales and business development, social media manager. Yea, as you can see that I like to trying something out of my field but once I realize that I have to commit and focus on one thing, I decided to choose tech as my main area because there is nothing interesting to see how the new technology released become a part of the lifestyle and business. And also one of the reason is that I have a strong basic in this field rather than other fields, but of course thankfully it helps me to understand how to deal with businesses and how the business works. </p>

                <p>So according to my journey in my previous jobs, I observed that there are still so many businesses around my city that are not educated to utilize the technology for their business, whether to gain more profit, more productivity, or more lower cost. I am driven to provide them with a solution.</p>

                <p className="font-bold">Most commonly used stacks:</p>
                <span>Laravel, React JS, Flutter, Tailwind CSS, MySQL</span>
            </div>
        </section>
    </>
  )
}

export default About