import React from "react";
import { Flex, Image } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import Logo from '../../../assets/logo_dark_bg.png';

const NavLeft = () => {
  return (
    <Link to="/" >
      <Flex direction='column' align='center'>
        <Image src={Logo} alt="MySchool logo" p="24px"/>
      </Flex>
    </Link>
  );
};
export default NavLeft;
