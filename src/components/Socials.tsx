'use client';

import Link from 'next/link';
import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from 'react-icons/ri';

const icons = [
  {
    path: 'https://www.linkedin.com/in/hao-on/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/hao-on',
    name: <RiGithubFill />,
  },
  {
    path: '/',
    name: <RiFacebookFill />,
  },
  {
    path: '/',
    name: <RiInstagramFill />,
  },
  {
    path: '/',
    name: <RiTwitterFill />,
  },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={index}
            rel='noopener noreferrer'
            target='_blank'
          >
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
