import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { TriangleDownIcon } from "@chakra-ui/icons";

const Parentvariants = {
  visible: {
    opacity: 1,
    x: 200,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.6,
    },
  },
  hidden: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 0.6,
      when: "afterChildren",
      staggerChildren: 0.3,
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

const ListVariants = {
  hidden: {
    // opacity : 0,
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      duration: 0.6,
      // when: "afterChildren",
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
  visible: {
    // opacity:1,
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const ListItemVariants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      // duration : 0.6,
      // bounce : 0.6
    },
  },
};

const List = styled(motion.ul)`
  position: absolute;
  top: 110%;
  width: 300px;
  border-radius: 6px;
  height: 300px;
  background-color: #fff;
  color: #000;
  /* padding: 16px; */
  list-style-type: none;
  overflow-y: auto;
`;

const ListItem = styled(motion.li)`
  padding-bottom: 16px;
  cursor: pointer;
  padding: 16px;
  :hover {
    background-color: whitesmoke;
  }
  :active {
    background-color: #dedbdb;
  }
`;

const values = [
  "HTML",
  "CSS",
  "JS",
  "REACT",
  "NEXT",
  "FRAMER",
  "TYPESCRIPT",
  "STORYBOOK",
  "JEST",
];
export default function Example() {
  const [isMotion, setMotion] = useState(false);

  const [isListOpen, setIsListOpen] = useState(false);

  const [activeItem, setActiveItem] = useState("");

  const onTap = (event: any) => {
    console.log(event);
    setIsListOpen(!isListOpen);
  };

  const itemHandler = (item: any) => {
    setActiveItem(item);
    setIsListOpen(!isListOpen);
  };

  const containerRef = useRef(null);

  const scroll = useScroll({
    container: containerRef,
  });

  console.log(scroll);

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

      {/* <Box>
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
      </Box> */}

      {/* <Box position={"relative"}>
        <Flex
          as={motion.div}
          whileTap={{ scale: 0.8 }}
          justifyContent={"space-between"}
          cursor={"pointer"}
          borderRadius={"6px"}
          alignItems={"center"}
          color={"#000"}
          width={"300px"}
          height={"40px"}
          bg={"#fff"}
          padding={"0 10px"}
          // onClick={() => setIsListOpen(!isListOpen)}
          onTap={() => onTap("name")}
        >
          <AnimatePresence mode='wait'>
            <motion.h4
              key={activeItem ?? "empty"}
              // as={motion.h4}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              // exit={{scale : 0.6, opacity:0}}
              transition={{duration:0.2}}
            >
              {activeItem ? activeItem : "Menu"}
            </motion.h4>
          </AnimatePresence>
          <TriangleDownIcon />
        </Flex>
        <List
          variants={ListVariants}
          initial={false}
          animate={isListOpen ? "visible" : "hidden"}
        >
          {values &&
            values.map((value) => (
              <ListItem
                key={value}
                variants={ListItemVariants}
                onClick={() => itemHandler(value)}
              >
                {value}
              </ListItem>
            ))}
        </List>
      </Box> */}
      <Box
        as={motion.div}
        position={"fixed"}
        h={"10px"}
        top={0}
        left={0}
        bg={"pink"}
        right={0}
        transformOrigin={"0%"}
        style={{scaleX:scroll.scrollXProgress}}
      ></Box>

      <Box
        w={"1000px"}
        ref={containerRef}
        overflowX={"auto"}
        height={"300px"}
        bg={"white"}
        p={"16px 0"}
      >
        <Box w={"2000px"} bg={"gray"} height={"100%"}></Box>
      </Box>

      <button onClick={() => console.log(scroll)}>Get Scroll Position</button>
    </Flex>
  );
}
