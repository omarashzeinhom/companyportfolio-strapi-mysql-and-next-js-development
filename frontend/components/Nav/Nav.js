import React from "react";
import Link from "next/link";
import variables from "../../styles/variables.module.scss";

const Nav = () => {
  return (
    <nav>
      <ul>
        {Navitems.map((item, index) => (
          <>
            <li className={variables.primaryColor}>
              <Link href={item?.link}>
                <a>{item?.title}</a>
              </Link>
            </li>
          </>
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
