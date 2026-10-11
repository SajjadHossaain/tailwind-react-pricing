import React from 'react';
import Link from './Link';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
    return (
      <nav>
        <ul className="flex">
            {/* type1 */}
          {/* <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Services">Services</a></li> */}
          
          {/* type 2 */}
          {/* {navLinks.map((rout) => (
            <li>
              <a href={rout.path}>{rout.name}</a>
            </li>
          ))} */}

          {/* type 3 */}

          {
            navLinks.map(route=><Link key={route.id} route={route}></Link>)
          }
        </ul>
      </nav>
    );
};

export default NavBar;