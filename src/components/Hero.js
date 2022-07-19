import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import webDevelopment from '../assets/web-development.png';
import wave from '../assets/wave.png';
import spark from '../assets/spark.png';

function Hero({ setHeroInView }) {
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
  });

  useEffect(() => {
    setHeroInView(inView);
  }, [inView, setHeroInView]);

  return (
    <section
      id='home'
      className='relative text-center sm:text-left px-5 animate-slide-in'
      ref={ref}
    >
      <div className='hidden sm:block absolute -top-24 left-20 md:left-auto right-0'>
        <img src={wave} alt='' className='h-full' />
      </div>

      <div className='relative z-10 container'>
        <div className='h-screen grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-8'>
          <div className='flex flex-col justify-center gap-4'>
            <h1 className='relative text-4xl sm:text-4xl md:text-5xl font-bold text-white'>
              Hi, I'm Xuan Hung
              <div className='hidden md:block absolute -left-8 -top-12 sm:-left-16 md:-left-20'>
                <img src={spark} alt='' />
              </div>
            </h1>
            <h3 className='text-3xl sm:text-2xl md:text-3xl font-bold text-white/75'>
              Web Developer
            </h3>
            <p className='max-w-[600px] text-lg text-white/50 my-2 md:my-4'>
              I'm passonate about building high-quality beautiful interactive
              website.
              {/* I code small things with great care, and I love what I
              do. */}
            </p>
            <div className='flex flex-wrap justify-center sm:justify-start items-center gap-4'>
              <a href='#contact' className='inline-block btn btn-primary'>
                Contact Me
              </a>
              <a
                href='/resume.pdf'
                target='_blank'
                className='inline-block btn btn-secondary'
              >
                View Resumé
              </a>
            </div>
          </div>
          <div className='hidden sm:block'>
            <img src={webDevelopment} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
