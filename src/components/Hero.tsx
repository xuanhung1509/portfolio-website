import { useInView } from 'react-intersection-observer';
import webDevelopment from '../assets/web-development.png';
import wave from '../assets/wave.png';
import spark from '../assets/spark.png';

function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <section
      id='home'
      className={`relative text-center md:text-left px-5 ${
        inView ? 'opacity-100' : 'opacity-0 translate-y-24'
      } transition-all duration-1000`}
      ref={ref}
    >
      <div className='hidden lg:block absolute -top-24 right-0'>
        <img src={wave} alt='' className='h-full' />
      </div>

      <div className='relative z-10 container'>
        <div className='h-screen grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8'>
          <div className='flex flex-col justify-center gap-4'>
            <h1 className='relative text-4xl sm:text-4xl md:text-5xl font-bold text-white'>
              Hi, I'm Xuan Hung
              <div className='hidden lg:block absolute -top-12 -left-20'>
                <img src={spark} alt='' />
              </div>
            </h1>
            <h3 className='text-3xl sm:text-2xl md:text-3xl font-bold text-white/75'>
              Web Developer
            </h3>
            <p className='max-w-xl text-lg text-white/50 my-2 md:my-4'>
              I'm passionate about build exceptional websites that solve the
              problems of those around me.
            </p>
            <div className='flex flex-wrap justify-center md:justify-start items-center gap-4'>
              <a
                href='#contact'
                className='w-40 md:w-auto inline-block btn btn-primary'
              >
                Contact Me
              </a>
              <a
                href='/resume.pdf'
                target='_blank'
                className='w-40 md:w-auto inline-block btn btn-secondary'
              >
                View Resumé
              </a>
            </div>
          </div>
          <div className='hidden md:block'>
            <img src={webDevelopment} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
