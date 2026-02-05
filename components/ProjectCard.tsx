import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';

interface ProjectCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item, onClick }) => {
  return (
    <motion.div
      layoutId={`card-container-${item.id}`}
      onClick={onClick}
      className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        layoutId={`image-${item.id}`}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
        layoutId={`bg-${item.id}`}
      />
      <motion.div
        className="absolute bottom-0 left-0 p-4"
        layoutId={`title-${item.id}`}
      >
        <h3 className="text-white text-xl font-bold">{item.title}</h3>
        <p className="text-gray-400">{item.type}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
