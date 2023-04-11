import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Flex } from "@chakra-ui/react";

const Parentvariants = {
  visible: {
    opacity: 1,
    x: 200,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren : 0.6,
    },
  },
  hidden: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 0.6,
      when: "afterChildren",
      staggerChildren : 0.3,
    },
  },
};

const childVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export default function Example() {
  const [isMotion, setMotion] = useState(false);
  console.log(isMotion);
  
  return (
    <Flex flexDirection={"column"}>
      {/* <motion.div
        style={{
          width: "200px",
          height: "200px",
          background: "orange",
          borderRadius: "30px",
        }}
        initial={{ x: 0 }}
        animate={{ x: [0, 400, 800], background: "red" }}
        transition={{
          duration: 2,
          times: [0, 0.1, 0.8],
          type: "tween",
          repeat: Infinity,
        }}
      ></motion.div> */}

      <Box>
        <Box
          as={motion.div}
          w={"200px"}
          h={"200px"}
          bg={"red"}
          display={"flex"}
          justifyContent={"center"}
          flexDir={"column"}
          gap={"10px"}
          alignItems={"center"}
          variants={Parentvariants}
          initial={"hidden"}
          animate={isMotion ? "visible" : "hidden"}
        >
          <Box
            w="50px"
            h={"50px"}
            bg={"pink"}
            as={motion.div}
            variants={childVariants}
          ></Box>
          <Box
            w="50px"
            h={"50px"}
            bg={"pink"}
            as={motion.div}
            variants={childVariants}
          ></Box>
        </Box>
        <Button onClick={() => setMotion(!isMotion)}>Move</Button>
      </Box>
    </Flex>
  );
}
