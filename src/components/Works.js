import { useInView } from 'react-intersection-observer';
import { projects, socialMedia } from '../data';
import WorkItem from './WorkItem';

function Works() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <section id='works' className='text-white px-4 py-0 sm:p-8 -mt-12 sm:mt-0'>
      <div className='container relative'>
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 ${
            inView ? 'opacity-100' : 'opacity-0 translate-y-24'
          } transition-all duration-1000`}
          ref={ref}
        >
          Featured Projects
        </h2>
        <div className='flex flex-col items-center gap-16 sm:gap-32'>
          {projects.map((project) => (
            <WorkItem key={project.id} {...project} />
          ))}
          <a
            href={socialMedia[0].link}
            className='inline-block btn btn-primary -mt-4 sm:-mt-16'
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
export default Works;
