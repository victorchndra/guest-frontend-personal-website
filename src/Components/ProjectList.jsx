import { useEffect } from "react"
import { useState } from "react"
import cityImage from '../Images/city.jpg'
import laboratoriumImage from '../Images/laboratorium.jpg'

/* eslint-disable react/jsx-key */
const ProjectList = () => {

    const [selectedProject, setSelectedProject] = useState()

    const handleActiveProject = (index) => {
      setSelectedProject(index)
    }
    
    const projects = [
      {
        name: 'Citycloud - Village Management System',
        initial: 'SIMDES',
        image: cityImage,
      },
      {
        name: 'Campus Lab Management System',
        initial: '',
        image: laboratoriumImage,
      },
    ]

    useEffect(() => {
      setSelectedProject(0)
    }, [])

    return (
      <>
        <div className="flex flex-col space-y-1 justify-end">
          {projects.map((project, index) => (
            <div key={index} 
                className={`flex bg-gray-300 px-4 py-2 cursor-pointer hover:shadow-md items-end transition-all duration-300 rounded-2xl bg-cover relative ${index == selectedProject ? 'h-72 items-end' : 'h-24'}`} 
                onClick={() => handleActiveProject(index)}
                style={{ backgroundImage: `url(${project.image})`, backgroundPosition: 'center' }}>

              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-2xl"></div>
              <h1 className="font-poppins font-bold uppercase text-white relative z-10 shadow-lg">
                {project.name}
              </h1>
            </div>
          ))}
        </div>
      </>
    )
}

export default ProjectList