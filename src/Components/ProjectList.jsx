import { useEffect } from "react"
import { useState } from "react"

/* eslint-disable react/jsx-key */
const ProjectList = () => {

    const [selectedProject, setSelectedProject] = useState()

    const handleActiveProject = (index) => {
      setSelectedProject(index)
    }
    
    const projects = [
      {
        name: '"Citycloud" Management System',
        initial: 'SIMDES',
      },
      {
        name: 'Laundry Cashier',
        initial: '',
      },
      {
        name: 'Soon...',
        initial: '',
      },
      {
        name: 'Soon...',
        initial: '',
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
              className={`flex bg-gray-300 px-4 py-2 cursor-pointer hover:shadow-md transition-all duration-300 rounded-2xl ${index == selectedProject && 'h-64 items-end'}`} 
              onClick={() => handleActiveProject(index)}>
              <h1 className="font-poppins font-bold uppercase text-white">
                {project.name}
              </h1>
            </div>
          ))}
        </div>
      </>
    )
}

export default ProjectList