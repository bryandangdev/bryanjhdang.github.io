import { SectionTitle } from "./SectionComponents"
import { projectData } from "../assets/files/projectData"

interface ProjectInfo {
  name: string,
  description: string,
  imageLink: string,
  projectLink: string,
  githubLink: string | null,
  type: string,
  tags: string[]
}

function Project({ project }: { project: ProjectInfo }) {
  return (
    <div>
      <div className="group flex sm:flex-row flex-col gap-10 py-8" >
        
        
        <div className="basis-1/4">
          <img src={project.imageLink} alt={project.name} className="w-full object-cover" />
        </div>

        <div className="flex-1">

            {/* Title */}
          <div className="pb-4">
            <a href={project.projectLink} target="_blank" className="text-xl font-semibold link">{project.name}</a>
            <p className="pt-2 text-base">{project.description}</p> 
          </div>

          <div className="flex flex-row flex-wrap gap-2 pb-4">
            <p className="badge badge-outline">{project.type}</p>
            {project.tags.map((element, index) => (
              <p key={index} className="badge badge-outline">{element}</p>
            ))}
          </div>

          {/* <div>
            {project.projectLink && (
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="link mr-5">
                View Project
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link mr-5">
                Git Repo
              </a>
            )}
          </div> */}
        
        </div>
      </div>
    </div>
  )
}


export default function Projects() {
  return (
    <div id="projects" className="pt-20 pb-20 border-none">
      <SectionTitle title="Some Projects" />
      <div className="grid grid-cols-1 gap-10">
        {projectData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  )
}