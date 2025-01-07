import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

// Component for the project image
const ProjectImage = ({ imageUrl, title }: { imageUrl: string; title: string }) => (
  <img 
    src={imageUrl} 
    alt={title}
    className="w-full h-72 object-cover"
  />
);

// Component for the project title and description
const ProjectInfo = ({ title, description }: { title: string; description: string }) => (
  <>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      {description}
    </p>
  </>
);

// Component for the technology tags
const ProjectTechnologies = ({ technologies }: { technologies: string[] }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {technologies.map((tech, index) => (
      <span 
        key={index}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
      >
        {tech}
      </span>
    ))}
  </div>
);

// Component for the project links
const ProjectLinks = ({ githubUrl, liveUrl, substackUrl }: { githubUrl: string; liveUrl?: string; substackUrl?: string }) => (
  <div className="flex gap-4">
    {liveUrl && (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
      >
        Live
      </a>
    )}
      {substackUrl && (
      <a
        href={substackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
      >
        Article
      </a>
    )}
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
    >
      GitHub
    </a>
    
  </div>
);

export default function ProjectCard({ project }: ProjectCardProps) {
    return(
        <div 
            key={project.id}
            className="border-2 border-green-700 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-96"
        >
            <ProjectImage imageUrl={project.imageUrl} title={project.title} />
            <div className="p-6">
                <ProjectInfo title={project.title} description={project.description} />
                <ProjectTechnologies technologies={project.technologies} />
                <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} substackUrl={project.substackUrl} />
            </div>
        </div>
    )
}