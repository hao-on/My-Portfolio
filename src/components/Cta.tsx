import { Button } from './ui/button';
import Link from 'next/link';
import { MapPinIcon, MailIcon } from 'lucide-react';
const infoData = [
  {
    icon: <MapPinIcon size={20} />,
    text: 'California, USA',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'hao.van.on@gmail.com',
  },
];

const Cta = () => {
  return (
    <section id='contact' className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-8'>
            Don't Be Shy! Hit Me Up 👇
          </h2>
        </div>
        <div className='grid xl:grid-cols-2 my-2 mx-auto'>
          {infoData.map((item, index) => {
            return (
              <div className='flex items-center gap-x-4 mx-auto' key={index}>
                <div className='text-primary'>{item.icon}</div>
                <div>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cta;
