import { Link } from 'react-router-dom';

const navigationLinks = [
  {
    title: 'Explore',
    navigation: '/explore',
  },
  {
    title: 'Blog',
    navigation: '/blog',
  },
  {
    title: 'About',
    navigation: '/about',
  },
];

export default function Header() {
  return (
    <nav className="h-16 w-full shadow flex justify-between items-center px-12 font-sans">
      <div className="font-bold text-xl">
        <Link to="/">SwipeLondon</Link>
      </div>
      <div>
        <ul className="flex items-center gap-8 text-gray-700 text-lg">
          {navigationLinks.map((link) => {
            return (
              <Link key={link.title} to={link.navigation}>
                {link.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
