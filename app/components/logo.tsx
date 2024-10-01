'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const items = [
  {
    id: 1,
    content: 'in Tech',
  },
  {
    id: 2,
    content: 'at Work',
  },
];

export default function Logo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">Crip</div>

      <div className="relative flex items-center h-[1em] grow">
        <AnimatePresence>
          <motion.div
            key={items[index].id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ ease: 'easeInOut' }}
            className="absolute"
          >
            {items[index].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
