import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import GalleryModal from './GalleryModal';

const project1 = 'https://images.unsplash.com/photo-1728414535143-98edb06475bf?auto=format&fit=crop&w=800&q=80';
const project2 = 'https://images.unsplash.com/photo-1657934771872-2ded6ed63a34?auto=format&fit=crop&w=800&q=80';
const project3 = 'https://images.unsplash.com/photo-1753751375630-73dbb5c62306?auto=format&fit=crop&w=800&q=80';
const project4 = 'https://images.unsplash.com/photo-1593297779123-cee941f400c3?auto=format&fit=crop&w=800&q=80';
const project5 = 'https://images.unsplash.com/photo-1759148539903-03b6205f9747?auto=format&fit=crop&w=800&q=80';
const project6 = 'https://images.unsplash.com/photo-1621928671872-658fe50ba30d?auto=format&fit=crop&w=800&q=80';

const projectsData = [
  {
    id: 1,
    title: 'The Brick House',
    category: 'Residential',
    image: project1,
    gallery: [project1, project2, project3],
  },
  {
    id: 2,
    title: 'Mahogany Interiors',
    category: 'Interior',
    image: project2,
    gallery: [project2, project3, project1],
  },
  {
    id: 3,
    title: 'Grand Dining Hall',
    category: 'Commercial',
    image: project3,
    gallery: [project3, project1, project2],
  },
  {
    id: 4,
    title: 'Concrete & Clay',
    category: 'Architecture',
    image: project4,
    gallery: [project4, project5, project6],
  },
  {
    id: 5,
    title: 'Hillside Retreat',
    category: 'Residential',
    image: project5,
    gallery: [project5, project6, project4],
  },
  {
    id: 6,
    title: 'Urban Fortress',
    category: 'Commercial',
    image: project6,
    gallery: [project6, project4, project5],
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-brown-950 dark:text-white mb-4">Selected Works</h2>
            <div className="h-1 w-20 bg-brown-900 dark:bg-brown-500"></div>
          </div>
          <p className="text-brown-800/70 dark:text-stone-400 max-w-md mt-6 md:mt-0 text-right md:text-left">
            A curation of our most recent architectural endeavors, showcasing our commitment to sophisticated design and detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <GalleryModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        images={selectedProject?.gallery || []}
        title={selectedProject?.title || ''}
      />
    </section>
  );
};

export default Projects;
