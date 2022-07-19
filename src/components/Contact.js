import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { sendForm } from '@emailjs/browser';
import { FiPhone, FiMail } from 'react-icons/fi';
import { CgSpinnerAlt } from 'react-icons/cg';
import chat from '../assets/chat.png';
import { socialMedia, formInputs } from '../data';
import toast from 'react-hot-toast';

const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY,
} = process.env;

function Contact() {
  const [isProcessing, setIsProcessing] = useState(false);
  const formRef = useRef();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const { status } = await sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        REACT_APP_EMAILJS_PUBLIC_KEY
      );
      if (status === 200) toast.success('Your message was sent!');
    } catch (err) {
      toast.error('Error occurred. Please try again.');
    }

    setIsProcessing(false);
    formRef.current.reset();
  };

  return (
    <section
      id='contact'
      className={`text-white mt-8 md:mt-24 md:mb-8 ${
        inView ? 'opacity-100' : 'opacity-0 translate-y-24'
      } transition-all duration-1000`}
      ref={ref}
    >
      <div className='relative container'>
        <div className='hidden lg:block absolute top-0 right-4 xl:right-0 h-20 xl:h-28 brightness-75'>
          <img src={chat} alt='' className='h-full skew-x-12 brightness-50' />
        </div>
        <div className='flex flex-col justify-center items-center gap-8 px-4'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-8'>Get In Touch</h2>
          <div className='w-full grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col justify-center items-center md:items-start gap-4 mb-8 md:mb-0 px-4 md:px-8 lg:px-12 xl:px-16 py-6 border-l-4 md:border-l-0 md:border-r-4 border-portfolio-primary bg-black/50 rounded-md'>
              <h4 className='text-lg font-bold text-white/75 mb-2'>
                You can reach me at:
              </h4>
              <a
                href='tel:+84359448461'
                className='flex items-center gap-4 text-white/50 hover:text-portfolio-primary/75 hover:underline transition-all'
              >
                <FiPhone size={20} /> <span>(+84) 359 448 461</span>
              </a>
              <a
                href='mailto:vu.xuanhung1509@gmail.com'
                className='flex items-center gap-4 text-white/50 hover:text-portfolio-primary/75 hover:underline transition-all'
              >
                <FiMail size={20} /> <span>vu.xuanhung1509@gmail.com</span>
              </a>
              <ul className='flex justify-center items-center gap-4 mt-8'>
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
            </div>
            <div className='h-96 overflow-hidden'>
              {isProcessing ? (
                // Loading spinner
                <div className='h-full w-full flex justify-center items-center'>
                  <div className='flex items-center gap-2 bg-portfolio-primary/50 px-6 py-2 rounded-md'>
                    <CgSpinnerAlt size={40} className='animate-spin' />
                    <span>Processing...</span>
                  </div>
                </div>
              ) : (
                // Contact form
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className='flex flex-col items-stretch gap-4 md:px-8 py-6'
                >
                  {formInputs.map((item) => (
                    <div key={item.id}>
                      <label
                        htmlFor={item.id}
                        className='block mb-2 after:content-["*"] after:ml-1 after:text-red-400'
                      >
                        {item.label}
                      </label>
                      {item.type === 'textarea' ? (
                        <textarea
                          id={item.id}
                          name={item.id}
                          placeholder={item.placeholder}
                          required={item.required}
                          className='w-full text-black px-4 py-2 rounded-md'
                        ></textarea>
                      ) : (
                        <input
                          type={item.type}
                          id={item.id}
                          name={item.id}
                          placeholder={item.placeholder}
                          required={item.required}
                          className='w-full text-black px-4 py-2 rounded-md'
                        />
                      )}
                    </div>
                  ))}
                  <button type='submit' className='btn btn-primary mt-2'>
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
