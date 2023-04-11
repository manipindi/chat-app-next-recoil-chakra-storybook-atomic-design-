import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 90%;
  background-color: gray;
  height: 300px;
  margin-top: auto;
  z-index: 1;
`;

const PopupCard = styled(motion.div)`
  width: 300px;
  height: 400px;
  position: absolute;
  bottom: 250px;
  z-index: -1;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;

export default function ScrollTriggered() {
  return (
    <Flex
      w={"100%"}
      minH={"100vh"}
      flexDir={"column"}
      alignItems={"center"}
      gap={"20px"}
    >
      <Flex
        w={"90%"}
        height={"80vh"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Card />
        <PopupCard  initial={{ opacity: 0, y:200 }} whileInView={{ opacity: 1, y:0 }}  transition={{duration:2}} viewport={{ once: true }}/>
      </Flex>

      <Flex
        w={"90%"}
        height={"80vh"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Card />
        <PopupCard  initial={{ opacity: 0, y:200 }} whileInView={{ opacity: 1, y:0 }}  transition={{duration:2}} viewport={{ once: true }}/>
      </Flex>

      <Flex
        w={"90%"}
        height={"80vh"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Card />
        <PopupCard initial={{ opacity: 0, y:200 }} whileInView={{ opacity: 1, y:0 }}  transition={{duration:2}} viewport={{ once: true }}/>
      </Flex>

      <Flex
        w={"90%"}
        height={"80vh"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Card />
        <PopupCard initial={{ opacity: 0, y:200 }} whileInView={{ opacity: 1, y:0 }} transition={{duration:2}} viewport={{ once: true }}/>
      </Flex>
    </Flex>
  );
}
