'use client';
import Link from 'next/link';

// import interfaces
import { Project } from './ProjectCard';
// import swiper/react
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from './ProjectCard';

const projectData: Project[] = [
  {
    image: '/work/Cognoscente.png',
    category: 'React + Node',
    name: 'CognoScente',
    description: 'Full-Stack E-Commerce Website for selling luxury fragnances',
    github: 'https://github.com/hao-on/CognoScente',
  },
  {
    image: '/work/Breadit.png',
    category: 'Next',
    name: 'Breadit',
    description:
      'Full-Stack social media platform, taking inspiration from Reddit',
    github: 'https://github.com/hao-on/Breadit',
  },
  {
    image: '/work/ChatApp.png',
    category: 'Next',
    name: 'Connect',
    description: 'Full-Stack performant and reliable realtime-chat-app',
    github: 'https://github.com/hao-on/realtime-chat-app',
  },
  {
    image: '/work/FitShare.png',
    category: 'Kotlin',
    name: 'FitShare',
    description: 'Full-Stack Fitness-Nutrition Social Mobile Application',
    github: 'https://github.com/hao-on/FitShare',
  },
  {
    image: '/work/Pathfinder.png',
    category: 'React',
    name: 'Pathfinding Visualizer',
    description: 'Visualizing pathfinding and maze-generation algorithms',
    link: 'https://ho-pathfinding-visualizer.netlify.app',
    github: 'https://github.com/hao-on/Pathfinding-Visualizer',
  },
];

const Works = () => {
  return (
    <section className='relative' id='projects'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[480px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Latest Projects</h2>
          <p className='subtitle mb-8'>Check out my amazing works</p>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 5 projects */}
            {projectData.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
