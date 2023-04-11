import { Flex } from "@chakra-ui/react";
import React from "react";
import { DefaultWrapper } from "./[sub-item]";
import Link from "next/link";

export default function FramerMotion() {

  return (
    <DefaultWrapper>
        <Flex flexDir={"column"} gap={"10px"} alignItems={"center"}>
          <Link href={'/framer-motion/ball'}>Ball</Link>
          <Link href={'/framer-motion/list'}>List</Link>
          <Link href={'/framer-motion/moving-ball'}>Moving Ball</Link>
        </Flex>
    </DefaultWrapper>
  );
}
