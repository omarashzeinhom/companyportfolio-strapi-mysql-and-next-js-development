import React from "react";
import Link from "next/link";
import variables from "../../styles/variables.module.scss";

const Nav = () => {
  return (
    <nav>
      <ul className={variables.primaryColor}>
        {Navitems.map((item, index) => (
 
            <li key={item + index} >
              <Link href={item?.link}>
                <a>{item?.title}</a>
              </Link>
            </li>
      
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

const Navitems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];
