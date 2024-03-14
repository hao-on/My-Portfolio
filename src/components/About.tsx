import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  GraduationCap,
  Calendar,
  Briefcase,
  MapPinIcon,
} from 'lucide-react';
import { title } from 'process';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Hao On',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'hao.van.on@gmail.com',
  },
  {
    icon: <MapPinIcon size={20} />,
    text: 'California, USA',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Bachelor on Computer Science',
  },
];

interface Qualification {
  university?: string;
  qualification?: string;
  company?: string;
  role?: string;
  years?: string;
}

const qualificationData: {
  title: string;
  data: Qualification[];
}[] = [
  {
    title: 'education',
    data: [
      {
        university: 'California State University, Long Beach',
        qualification: 'Bachelor of Science',
        years: '2019 - 2022',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Golden West Consultinc, INC.',
        role: 'Software Engineer I',
        years: '2023 - Present',
      },
      {
        company: 'California State University, Long Beach',
        role: 'Undergraduate Researcher',
        years: '2021 - 2022',
      },
    ],
  },
];

const skillTitle = ['Languages', 'Technologies', 'Tools'];
const skillData = [
  {
    title: 'Languages',
    data: [
      {
        imgPath: '/tech/light/java.svg',
      },
      {
        imgPath: '/tech/light/javascript.svg',
      },
      {
        imgPath: '/tech/light/typescript.svg',
      },
      {
        imgPath: '/tech/light/python.svg',
      },
      {
        imgPath: '/tech/light/html.svg',
      },
      {
        imgPath: '/tech/light/css.svg',
      },
    ],
  },
  {
    title: 'Technologies',
    data: [
      {
        imgPath: '/tech/light/react.svg',
      },
      {
        imgPath: '/tech/light/nodejs.svg',
      },
      {
        imgPath: '/tech/light/spring.svg',
      },
      {
        imgPath: '/tech/light/mysql.svg',
      },
      {
        imgPath: '/tech/light/mongodb.svg',
      },
      {
        imgPath: '/tech/light/redis.svg',
      },
      {
        imgPath: '/tech/light/aws.svg',
      },
    ],
  },
  {
    title: 'Tools',
    data: [
      {
        imgPath: '/tech/light/git.svg',
      },
      {
        imgPath: '/tech/light/vscode.svg',
      },
      {
        imgPath: '/tech/light/figma.svg',
      },
      {
        imgPath: '/tech/light/postman.svg',
      },
      {
        imgPath: '/tech/light/jira.svg',
      },
    ],
  },
];
const About = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <iframe
              allowTransparency
              src='/about/shape-light.svg'
              className='w-[505px] h-[505px] bg-no-repeat relative'
            />
            {/* <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/developer.png'
            /> */}
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualifcations
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='tech stacks'
                >
                  Tech Stacks
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Innovative Thinker, Team Player, Problem Solver
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I specialize in crafting intuitive applications with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mx-auto xl:mx-0'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2 mt-12 xl:mt-8'>
                      <div className='text-primary'>Language Skill</div>
                      <div className='border-b border-border'></div>
                      <div>English, Vietnamese, Chinese</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifcations */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className='grid gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary '>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (item: Qualification, index: number) => {
                              const { company, role, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary '>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map(
                            (item: Qualification, index: number) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills and tools */}
                <TabsContent value='tech stacks'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>What I use Everday</h3>
                    <div>
                      {skillTitle.map((title: string, indx: number) => {
                        return (
                          <>
                            <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                              {title}
                            </h4>
                            <div className='border-b border-border mb-4'></div>
                            <div className='flex gap-x-8 justify-center xl:justify-start mb-10'>
                              {getData(skillData, title).data.map(
                                (item: any, index: number) => {
                                  const { imgPath } = item;
                                  return (
                                    <div key={index}>
                                      <Image
                                        src={imgPath}
                                        width={48}
                                        height={48}
                                        alt=''
                                        priority
                                      />
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
