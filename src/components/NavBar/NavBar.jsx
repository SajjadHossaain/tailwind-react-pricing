import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

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
  const [open,setOpen] = useState(false)
  const links = navLinks.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
    return (
      <nav className="flex justify-between mx-10">
        <span className="flex gap-2" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}
          <ul className="md:hidden">{links}</ul>
          <h3>My Navbar</h3>
        </span>
        <ul className="md:flex hidden">{links}</ul>
        <button>Sign In</button>
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
      </nav>
    );
  };
  
  export default NavBar;