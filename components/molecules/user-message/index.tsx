import UserIcon from "../../../components/atoms/user-icon";
import { Box, Flex, Text } from "@chakra-ui/react";
import { delay, motion } from "framer-motion";
import React from "react";

const variants = {
  enter : {
    opacity : 0,
    y : 60,
  },
  visible : {
    opacity : 1,
    y : 0
  },
  exit: {
    opacity : 0,
    // y : 
  }
}

export default function UserMessage({ message, icon, index, listlength }: any) {
  console.log(index, listlength);

  return (
    <Flex
      as={motion.div}
      key={message ? message : "empty"}
      variants={variants}
      initial={"enter"}
      animate = {"visible"}
      exit={"exit"}
      alignItems={"center"}
      gap="10px"
      justifyContent={"flex-end"}
    >
      <Flex
        h={"32px"}
        bg="user-hover-bg"
        justifyContent={"center"}
        borderRadius={"8px 0 8px 8px"}
        p={"5px 10px"}
      >
        <Text fontSize={"sm"} color="dark.text-color">
          {message}
        </Text>
      </Flex>
      <UserIcon src={icon} size={"sm"} />
    </Flex>
  );
}
