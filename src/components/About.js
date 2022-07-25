import { useInView } from 'react-intersection-observer';
import growth from '../assets/growth.png';
import react from '../assets/react.png';
import javascript from '../assets/javascript.png';
import css from '../assets/css.png';
import firebase from '../assets/firebase.png';
import redux from '../assets/redux.png';
import node from '../assets/node.png';
import git from '../assets/git.png';
import figma from '../assets/figma.png';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <section
      id='about'
      className={`text-white mt-12 ${
        inView ? 'opacity-100' : 'opacity-0 translate-y-24'
      } transition-all duration-1000`}
      ref={ref}
    >
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-24'>
          <div className='hidden md:block'>
            <img src={growth} alt='' />
          </div>

          <div className='flex flex-col gap-3 md:gap-4 text-center md:text-left px-2'>
            <h2 className='flex flex-col md:flex-row items-center gap-8 text-3xl sm:text-4xl font-bold after:block after:h-1 after:flex-1 after:bg-portfolio-primary after:rounded-md'>
              About Me
            </h2>
            <div className='max-w-md mx-auto'>
              <p>
                Despite my majoring in economics, I always have a passion for
                technology. My interest in web development sparked back in 2021
                after enrolling in{' '}
                <a
                  href='https://coursera.org/share/a112855459cad20cdf5574eb78164961'
                  target='_blank'
                  rel='noreferrer'
                  className='text-portfolio-primary border-b border-portfolio-primary'
                >
                  a Python course series on Coursera.
                </a>{' '}
              </p>
              <p>
                Since then, I have touched different concepts in web development
                and programming in general. Here's some of the languages and
                technologies I specialized in:
              </p>
            </div>
            <div className='grid grid-cols-9 items-center gap-2 mt-1 mb-3'>
              <span className='col-start-4 md:col-start-1'>
                <img src={react} alt='' />
              </span>
              <span>
                <img src={javascript} alt='' />
              </span>
              <span>
                <img src={css} alt='' />
              </span>
            </div>
            <p>I'm also familiar with:</p>
            <div className='grid grid-cols-9 items-center gap-2 mt-1 mb-3'>
              <span className='col-start-3 md:col-start-1'>
                <img src={firebase} alt='' />
              </span>
              <span>
                <img src={redux} alt='' className='brightness-150' />
              </span>
              <span>
                <img src={node} alt='' />
              </span>
              <span>
                <img src={git} alt='' />
              </span>
              <span>
                <img src={figma} alt='' />
              </span>
            </div>

            <p className='max-w-md mx-auto'>
              And I'm always excited to learn new technologies as I move
              forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
