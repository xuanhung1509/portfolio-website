import { useInView } from "react-intersection-observer";

import css from "../assets/css.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import growth from "../assets/growth.png";
import javascript from "../assets/javascript.png";
import linux from "../assets/linux.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import react from "../assets/react.png";

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <section
      id="about"
      className={`text-white mt-12 ${
        inView ? "opacity-100" : "opacity-0 translate-y-24"
      } transition-all duration-1000`}
      ref={ref}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-24">
          <div className="hidden md:block">
            <img src={growth} alt="" />
          </div>

          <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left px-2">
            <h2 className="flex flex-col md:flex-row items-center gap-8 text-3xl sm:text-4xl font-bold after:block after:h-1 after:flex-1 after:bg-portfolio-primary after:rounded-md">
              About Me
            </h2>
            <div className="max-w-md mx-auto">
              <p>
                My interest in web development sparked back in 2021 after
                enrolling in{" "}
                <a
                  href="https://coursera.org/share/a112855459cad20cdf5574eb78164961"
                  target="_blank"
                  rel="noreferrer"
                  className="text-portfolio-primary border-b border-portfolio-primary"
                >
                  a Python course series on Coursera.
                </a>
              </p>
              <p className="mt-4">
                Since then, I have dived into different aspects of web
                development and programming in general. While starting as a
                front-end developer, I'm expanding my knowledge to server-side
                realm.
              </p>
            </div>

            <p className="max-w-md mx-auto">
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
