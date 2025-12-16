import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/5] overflow-hidden bg-brown-100 dark:bg-stone-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-brown-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
          <Plus size={24} className="text-brown-900" />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs font-bold tracking-widest text-brown-500 dark:text-brown-400 uppercase mb-1">{category}</p>
        <h3 className="text-xl font-medium text-brown-950 dark:text-white group-hover:text-brown-700 dark:group-hover:text-brown-300 transition-colors">{title}</h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
