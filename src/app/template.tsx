'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
// hooks
import useScrollProgress from '../../hooks/useScrollProgress';

const Template = ({ children }: { children: ReactNode }) => {
  const completion = useScrollProgress();

  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  };
  return (
    <>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* Completion Bar */}
      <span
        style={{ transform: `translateY(${Number(completion) - 100}%)` }}
        className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700'
      ></span>
      {/* <div className='h-[4000px]'></div> */}
    </>
  );
};

export default Template;
