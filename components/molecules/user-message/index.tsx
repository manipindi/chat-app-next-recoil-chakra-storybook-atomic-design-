import UserIcon from "../../../components/atoms/user-icon";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function UserMessage({ message, icon }: any) {
  return (
    <Flex
      as={motion.div}
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
