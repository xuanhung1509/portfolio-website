import { socialMedia } from '../data';

function VerticalNavigation() {
  return (
    <ul className='fixed bottom-0 left-12 hidden xl:flex flex-col gap-4 items-center text-white after:block after:w-[1px] after:h-32 after:bg-portfolio-primary'>
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
  );
}
export default VerticalNavigation;
