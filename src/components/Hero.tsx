'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';
import Image from 'next/image';

// components
import DevImg from './DevImg';
import Socials from './Socials';
import { useTheme } from 'next-themes';

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section className='py-12 xl:py-24 h-[90vh] xl:pt-28 bg-hero bg-no-repeat bg-center bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Software Engineer
            </div>
            {/* <h1
              className='h1 mb-4 relative w-[max-content] font-mono 
before:absolute before:inset-0 before:animate-typewriter before:bg-white 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black'
            >
              Hello, my name is Hao On
            </h1> */}
            <h1 className='h1 mb-4'>Hello, my name is Hao On</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='#contact '>
                <Button className='gap-x-2'>
                  Contact me <Send size={18} />
                </Button>
              </Link>
              {/* <Button variant='secondary' className='gap-x-2'>
                Download CV <Download size={18} />
              </Button>{' '} */}
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          {/* image */}
          <div className='hidden xl:flex relative'>
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark bg-no-repeat w-[500px] h-[500px] absolute -top-1 -right-2'></div>
            <iframe
              allowTransparency
              src='/hero/shape-1-light.svg'
              className='w-[510px] h-[462px] bg-no-repeat relative'
            />

            {/* <DevImg
              containerStyles='bg-hero_shape1_light dark:bg-hero_shape1_dark w-[510px] h-[462px] bg-no-repeat relative overflow-hidden'
              imgSrc='/hero/avatar.png'
            /> */}
          </div>
        </div>
      </div>
      {/* Icons */}
      <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
        <RiArrowDownSLine className='text-3xl text-primary' />
      </div>
    </section>
  );
};

export default Hero;
