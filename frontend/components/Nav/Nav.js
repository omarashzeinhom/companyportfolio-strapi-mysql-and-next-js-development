import React from 'react';
import Link from 'next/link';
import variables from '../../styles/variables.module.scss';

const Nav = () => {
  
    
    return (
  <nav>
    <ul>
        {
            
        }
        <li className={variables.primaryColor}><Link href='/home' ><a >Test</a></Link></li>

    </ul>
  </nav>
  )
}

export default Nav;


