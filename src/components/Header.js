import { useState, useEffect, useCallback } from 'react';
import { RiMenu5Line, RiCloseLine } from 'react-icons/ri';
import { navItems } from '../data';
import { socialMedia } from '../data';
import { floatingCTAs } from '../data';

function Header({ heroInView }) {
  const [currentScrollpos, setCurrentScrollpos] = useState(window.pageYOffset);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(true);
  const [hash, setHash] = useState('#home');

  // Close mobile menu after click nav item
  const handleClickNavItem = (hash) => {
    setHash(hash);
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
  };

  // Hide desktop menu on scroll down
  const handleScroll = useCallback(() => {
    if (window.pageYOffset > currentScrollpos) {
      setShowDesktopMenu(false);
    } else {
      setShowDesktopMenu(true);
    }

    setCurrentScrollpos(window.pageYOffset);
  }, [currentScrollpos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentScrollpos, handleScroll]);

  return (
    <header
      className={`fixed ${
        showDesktopMenu ? 'top-0' : '-top-24'
      } left-0 right-0 ${
        currentScrollpos > 20 && 'bg-portfolio-secondary'
      } duration-300 transition-all p-5 z-50`}
    >
      <div className='container'>
        <div className='flex justify-between items-center gap-4'>
          <a href='#home' className='text-2xl font-bold text-white'>
            xuanhung.
          </a>
          <button
            type='button'
            className='relative block sm:hidden p-4 z-50'
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            <span
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                showMobileMenu ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
              } transition-all`}
            >
              {' '}
              <RiCloseLine size={24} fill='#fff' />
            </span>
            <span
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                showMobileMenu ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              } transition-all`}
            >
              {' '}
              <RiMenu5Line size={24} fill='#fff' />
            </span>
          </button>
          <ul
            className={`fixed sm:static top-0 ${
              showMobileMenu
                ? 'right-0 left-1/4 drop-shadow-2xl'
                : '-right-full left-full'
            } bottom-0 transition-all duration-300 flex flex-col sm:flex-row justify-start sm:justify-center items-center sm:items-start gap-8 pt-24 sm:pt-0 bg-portfolio-secondary text-white sm:bg-transparent`}
          >
            {navItems.map((item) => (
              <li key={item.content}>
                <a
                  href={item.hash}
                  className={`relative inline-block ${
                    hash === item.hash && 'text-portfolio-primary'
                  } hover:text-portfolio-primary transition-colors px-1 pb-1 group`}
                  onClick={() => handleClickNavItem(item.hash)}
                >
                  {item.content}
                  <span
                    className={`block absolute left-0 bottom-0 h-1 w-full bg-portfolio-primary origin-left scale-x-0 group-hover:scale-x-100 ${
                      hash === item.hash && 'scale-x-100'
                    } transition-transform`}
                  ></span>
                </a>
              </li>
            ))}

            <ul className='fixed bottom-8 flex sm:hidden justify-center items-center gap-4 mt-4'>
              {socialMedia.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className='inline-block p-1 hover:text-portfolio-primary hover:-translate-y-1 transition-all'
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>

      {/* Show floating CTA in mobile */}
      {!heroInView && !showMobileMenu && (
        <ul className='fixed bottom-8 left-8 flex sm:hidden items-center gap-6 bg-portfolio-primary/25 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl'>
          {floatingCTAs.map((item) => (
            <li key={item.text}>
              <a
                href={item.link}
                className='flex flex-col items-center gap-1 group'
              >
                <span className='hover:text-portfolio-primary hover:-translate-y-1 transition-all'>
                  {item.icon}
                </span>
                <span className='w-28 absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-center bg-portfolio-primary text-portfolio-secondary px-2 py-1 rounded-full'>
                  {item.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
export default Header;
