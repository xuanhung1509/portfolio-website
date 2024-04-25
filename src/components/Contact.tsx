import { FiMail, FiPhone } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import chat from "../assets/chat.png";
import { socialMedia } from "../data";

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <section
      id="contact"
      className={`text-white mt-8 md:mt-24 md:mb-8 ${
        inView ? "opacity-100" : "opacity-0 translate-y-24"
      } transition-all duration-1000`}
      ref={ref}
    >
      <div className="relative container">
        <div className="hidden lg:block absolute top-0 right-4 xl:right-0 h-20 xl:h-28 brightness-75">
          <img src={chat} alt="" className="h-full skew-x-12 brightness-50" />
        </div>

        <h2 className="text-3xl text-center sm:text-4xl font-bold mb-8">
          Get In Touch
        </h2>

        <div className="border-l-4 border-portfolio-primary bg-black/50 rounded-md max-w-lg mx-auto">
          <div className="flex flex-col justify-center items-center gap-4 mb-8 md:mb-0 px-4 md:px-8 lg:px-12 xl:px-16 py-6">
            <h4 className="text-lg font-bold text-white/75 mb-2">
              Reach me at:
            </h4>
            <a
              href="tel:+84359448461"
              className="flex items-center gap-4 text-white/50 hover:text-portfolio-primary/75 hover:underline transition-all"
            >
              <FiPhone size={20} /> <span>(+84) 359 448 461</span>
            </a>
            <a
              href="mailto:vu.xuanhung1509@gmail.com"
              className="flex items-center gap-4 text-white/50 hover:text-portfolio-primary/75 hover:underline transition-all"
            >
              <FiMail size={20} /> <span>vu.xuanhung1509@gmail.com</span>
            </a>
            <div className="mt-4">
              <ul className="flex justify-center items-center gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
