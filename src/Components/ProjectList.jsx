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
        name: 'Sistem Informasi Manajemen Desa',
        initial: 'SIMDES',
      },
      {
        name: 'Laundry Cashier',
        initial: '',
      },
      {
        name: 'Sample #3',
        initial: '',
      },
      {
        name: 'Sample #4',
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
              className={`flex bg-gray-300 px-4 py-2 cursor-pointer ${index == selectedProject && 'h-48 items-end'}`} 
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