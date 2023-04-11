import UserName from "../../../components/atoms/labels/username";
import UserIcon from "../../../components/atoms/user-icon";
import { Box } from "@chakra-ui/react";
import React from "react";

interface UserHeaderProps {
  activeUser : string,
  src ?: string | HTMLImageElement | any
}

export default function UserChatHeader({activeUser, src}:UserHeaderProps) {
  return (
    <Box
      position="absolute"
      top="0px"
      w="100%"
      h="80px"
      borderBottom="0.01px solid #737373"
      display="flex"
      alignItems={"center"}
      p="0 30px"
      gap={"10px"}
    >
      <UserIcon src={src} name="Dan" size={"md"} />
      <UserName username={activeUser} />
    </Box>
  );
}
