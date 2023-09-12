"use client";

import React from 'react';
//images
import Image from 'next/image';
import Logo from '../../../public/logo.svg'
import { Link } from "react-scroll";

const Header = () => {
  return (
  <header className="py-8">
<div className="container mx-auto">
<div className="flex justify-between items-center">
    {/* logo */}
    <a href="#">
      <Image src={Logo} alt='Logo' />
    </a>
    <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer"
          >
<button className='btn btn-sm'>Work with me</button>
</Link>
  </div>
</div>
</header>
  )
};

export default Header;
 