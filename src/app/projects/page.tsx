import React from 'react';
import { Project } from '@/types/project';
import ProjectCard from '@/components/ProjectCard';

const projects: Project[] = [
  {
    id: 1,
    title: "Ideas Gym",
    description: "Overcome writer's block by chatting with an AI thought partner for 20 minutes",
    technologies: ["React", "TypeScript", "Tailwind", "Stripe Integration"],
    imageUrl: "/plato.jpg",
    githubUrl: "https://github.com/chelsea-zhou/ideas-gym",
    liveUrl: "https://ideas-gym.vercel.app"
  },
  {
    id: 2,
    title: "ChenshuBot",
    description: "Chat with me through my writing. A quick and interactive way to know my values, with links to my essays as evidence.",
    technologies: ["React", "Python", "Pinecone"],
    imageUrl: "/chenshubot.webp",
    githubUrl: "https://github.com/chelsea-zhou/chenshubot",
    liveUrl: "https://chenshuz-website.vercel.app/"
  },
  {
    id: 3,
    title: "ConverseChronicle",
    description: "An iOS meeting scribe app. Never miss a meaningful conversation with your friend.",
    technologies: ["React-Expo", "Deepgram", "Express"],
    imageUrl: "/2frog.jpg",
    githubUrl: "https://github.com/fractal-bootcamp/ConverseChronicle"
  },
  {
    id: 4,
    title: "Find your writing soulmates",
    description: "Find top 10 semantically similar essays from a pool of 100 essays with your essay as the query",
    technologies: ["Semantic Embedding", "Cosine Similarity"],
    imageUrl: "/dancing.jpg",
    githubUrl: "https://chenshuz.substack.com/p/finding-top-10-matches-from-100-essays"
  }

];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-16 max-w-5xl">
      <h1 className=" text-3xl font-bold mb-8">Projects</h1>
      
      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
