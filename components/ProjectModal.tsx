import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '../types';
import { X } from 'lucide-react';

interface ProjectModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose }) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            layoutId={`card-container-${item.id}`}
            className="relative bg-white rounded-lg w-full max-w-3xl h-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              <X />
            </motion.button>
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
              layoutId={`image-${item.id}`}
            />
            <motion.div className="p-8">
              <motion.div layoutId={`title-${item.id}`}>
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-4">{item.type}</p>
              </motion.div>
              {item.type === 'CLIENT' ? (
                <div>
                  <p className="text-lg mb-4">{item.mission}</p>
                  <h4 className="text-xl font-bold mb-2">Results:</h4>
                  <ul className="list-disc list-inside">
                    {item.results?.map((result, index) => (
                      <li key={index} className="text-lg">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <p className="text-lg mb-4">{item.concept}</p>
                  <p className="text-lg">
                    <span className="font-bold">Status:</span> {item.status}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
