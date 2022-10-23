import React from "react";
import { Link } from "@chakra-ui/react"
import Image from 'next/image'
import logo from '../assets/icons/logo.png'
const Logo = () => {
  return (
  <Link href='/'>
      <Image
        alt='logo'
        src={logo}
        width='50px'
        height='50px'
        />
    </Link>
  )
}

export default Logo;
