import { AnimatePresence, motion } from "framer-motion";
import UserMessage from "../../../components/molecules/user-message";
import { userMsgsAtomFamily } from "../../../recoil/atom-families/user-messages/user-msgs-atom-family";
import { activeUserAtom } from "../../../recoil/atoms/active-user/active-user-atom";
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function UserChatListContainer() {
  const activeUser = useRecoilValue(activeUserAtom);
  const activeUserMessages = useRecoilValue(userMsgsAtomFamily(activeUser));
  return (
     <Flex
      flexDirection={"column"}
      gap="10px"
      h={`calc(100vh - 160px)`}
      overflowY="auto"
      m="80px 0 0 0"
      p={"20px"}
    >
      {!!activeUserMessages &&
        !!activeUserMessages.length &&
        activeUserMessages.map((eachMessage: any, idx: any) => (
          <UserMessage
            key={idx}
            icon={"https://bit.ly/dan-abramov"}
            message={eachMessage.message}
            index={idx}
          />
        ))}
    </Flex>
  );
}
