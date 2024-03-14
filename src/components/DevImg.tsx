import Image from 'next/image';
import React from 'react';

const DevImg = ({
  containerStyles,
  imgSrc,
}: {
  containerStyles: string;
  imgSrc: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      <img
        src={imgSrc}
        width={400}
        height={400}
        alt=''
        style={{
          left: '50%',
          top: '20%',
          marginLeft: '-200px',
        }}
      />
    </div>
  );
};

export default DevImg;
