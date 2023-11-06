import './hero.css';

import classnames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  return (
    <nav className="sticky top-0 h-16 w-full flex justify-between shadow items-center px-12 font-sans border-b-2  border-gray-600 z-50 bg-white">
      <div className="font-bold text-xl text-gray-700">
        <Link to="/">SwipeLondon</Link>
      </div>
      <div className="flex">
        <ul className="flex items-center gap-8 text-gray-700 text-lg">
          {navigationLinks.map((link) => {
            return (
              <li key={link.title}>
                <Link
                  to={link.navigation}
                  className={classnames(
                    'p-2   hover:bg-pastel-yellow-700 transition duration-200 font-bold',
                    {
                      'rounded-none -pb-4 border-b-4  border-pastel-yellow-700':
                        location.pathname === link.navigation,
                    },
                  )}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="ml-4 pl-4 border-l-2 border-gray-600 flex items-center justify-center">
          <Link
            to="/"
            className="p-2 rounded-lg  hover:bg-pastel-yellow-700 transition duration-200 font-bold"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
}
