import { useState, useEffect, useCallback, useRef } from "react";
import { RiMenu5Line, RiCloseLine } from "react-icons/ri";
import useMediaQuery from "../hooks/useMediaQuery";
import { navItems, socialMedia } from "../data";

function Header() {
  const [currentScrollpos, setCurrentScrollpos] = useState(window.pageYOffset);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [hash, setHash] = useState("#home");
  const isMobile = useMediaQuery("(max-width: 640px)");

  // Disable mobile menu transition on first load
  const menuTransition = useRef(false);

  const handleClickMobileMenu = () => {
    // Enable mobile menu transition
    menuTransition.current = true;

    setShowMobileMenu((prev) => !prev);
  };

  // Close mobile menu after click nav item
  const handleClickNavItem = (hash: string) => {
    setHash(hash);
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
  };

  // Hide desktop menu on scroll down
  const handleScroll = useCallback(() => {
    if (showMobileMenu) return;

    if (window.pageYOffset > currentScrollpos) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    setCurrentScrollpos(window.pageYOffset);
  }, [showMobileMenu, currentScrollpos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentScrollpos, handleScroll]);

  // Prevent scroll when mobile menu open
  useEffect(() => {
    const body = document.body;

    if (showMobileMenu) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [showMobileMenu]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${
        !showHeader && "-translate-y-full"
      } ${
        currentScrollpos > 20 && "bg-portfolio-secondary"
      } duration-300 transition-all p-5 z-50`}
    >
      <div className="container">
        <div className="flex justify-between items-center gap-4">
          <a href="#home" className="text-2xl font-bold text-white">
            xuanhung.dev
          </a>
          <button
            type="button"
            className="block p-2 sm:hidden z-50"
            onClick={handleClickMobileMenu}
          >
            {showMobileMenu ? (
              <RiCloseLine size={24} fill="#fff" />
            ) : (
              <RiMenu5Line size={24} fill="#fff" />
            )}
          </button>

          {/* Mobile menu backdrop  */}
          <div
            className={`fixed top-0 right-0 w-full h-full bg-slate-900 ${
              showMobileMenu ? "opacity-50" : "opacity-0 translate-x-full"
            } transition-opacity duration-300 overflow-hidden`}
            onClick={() => setShowMobileMenu(false)}
          ></div>

          <ul
            className={`fixed top-0 right-0 bottom-0 left-1/4 sm:static ${
              isMobile &&
              `${
                menuTransition.current && "transition-transform duration-300"
              } ${
                showMobileMenu ? "shadow-2xl shadow-black" : "translate-x-full"
              }`
            } flex flex-col sm:flex-row justify-start sm:justify-center items-center sm:items-start gap-8 pt-24 sm:pt-0 bg-portfolio-secondary text-white sm:bg-transparent`}
          >
            {navItems.map((item) => (
              <li key={item.content}>
                <a
                  href={item.hash}
                  className={`relative inline-block ${
                    hash === item.hash && "text-portfolio-primary"
                  } hover:text-portfolio-primary transition-colors px-1 pb-1 group`}
                  onClick={() => handleClickNavItem(item.hash)}
                >
                  {item.content}
                  <span
                    className={`block absolute left-0 bottom-0 h-1 w-full bg-portfolio-primary origin-right group-hover:origin-left scale-x-0 group-hover:scale-x-100 ${
                      hash === item.hash && "scale-x-100"
                    } transition-transform`}
                  ></span>
                </a>
              </li>
            ))}

            <ul className="fixed bottom-8 flex sm:hidden justify-center items-center gap-4 mt-4">
              {socialMedia.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block p-1 hover:text-portfolio-primary hover:-translate-y-1 transition-all"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
