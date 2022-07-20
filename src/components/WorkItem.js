import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import useMediaQuery from '../hooks/useMediaQuery';
import Tilt from 'react-parallax-tilt';

function WorkItem({
  id,
  title,
  description,
  images,
  tags,
  liveSite,
  sourceCode,
}) {
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1024px)');

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-12 ${
        inView ? 'opacity-100' : 'opacity-0 translate-y-24'
      } transition-all duration-1000`}
      ref={ref}
    >
      {/* Project thumbnail */}
      <Tilt
        tiltMaxAngleX='6'
        tiltMaxAngleY='6'
        className={`${
          id % 2 === 0 ? 'col-start-6 col-end-[-1]' : 'col-start-1 col-span-7'
        } md:row-start-1 md:row-span-5 bg-portfolio-primary/50 rounded-md overflow-hidden mb-8 md:mb-0`}
      >
        <a href={liveSite} target='_blank' rel='noreferrer'>
          <img
            src={images[isTablet ? 'tablet' : 'desktop']}
            alt=''
            className='opacity-25 hover:opacity-100 duration-300 transition-all h-full w-full object-cover'
          />
        </a>
      </Tilt>

      {/* Project Info */}
      <div
        className={`relative items-center text-center ${
          id % 2 === 0
            ? 'col-start-1 col-span-6 md:items-start md:text-left'
            : 'col-start-7 col-end-[-1] md:items-end md:text-right'
        }  row-start-3 row-span-1 flex flex-col gap-4 z-10`}
      >
        {/* Index accent */}
        <div
          className={`hidden md:block absolute top-6 md:top-0 ${
            id % 2 === 0 ? 'left-0 -translate-x-8' : 'right-0 translate-x-8'
          } -translate-y-1/2 text-9xl font-black text-portfolio-primary/10 -z-50`}
        >
          0{id}
        </div>
        <h4 className='text-2xl font-bold mb-2 md:mb-4'>{title}</h4>
        <p className='bg-portfolio-primary text-portfolio-secondary p-5 rounded-md shadow-xl'>
          {description}
        </p>
        <div
          className={`flex flex-wrap justify-center ${
            id % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
          } items-center gap-3`}
        >
          {tags.map((tag) => (
            <span key={tag} className='text-xs font-FiraCode'>
              {tag}
            </span>
          ))}
        </div>
        <div className='flex items-center gap-4 mt-'>
          <a
            href={sourceCode}
            className='hover:text-portfolio-primary hover:-translate-y-1 rounded-full transition-all p-2'
          >
            <FiGithub size={20} />
          </a>
          <a
            href={liveSite}
            target='_blank'
            rel='noreferrer'
            className='hover:text-portfolio-primary hover:-translate-y-1 rounded-full transition-all p-2'
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default WorkItem;
