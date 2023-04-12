import UserChatHeader from "@/components/molecules/user-chat-header";
import UserChatInput from "@/components/molecules/user-chat-input";
import UserChatListContainer from "@/components/organisms/user-messages-box";
import { activeUserAtom } from "@/recoil/atoms/active-user/active-user-atom";
import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { useRecoilValue } from "recoil";
export default function ChatWindow() {
  const activeUser = useRecoilValue(activeUserAtom);
  return (
    <Box
      w={`calc(100vw - 400px)`}
      position="absolute"
      left="400px"
      minHeight={"100vh"}
      bg="app-bg"
    >
        <UserChatHeader src="https://bit.ly/dan-abramov" activeUser={activeUser}/>
        <AnimatePresence initial={false}>
        <UserChatListContainer/>
        </AnimatePresence>
        <UserChatInput/>
    </Box>
  );
}
