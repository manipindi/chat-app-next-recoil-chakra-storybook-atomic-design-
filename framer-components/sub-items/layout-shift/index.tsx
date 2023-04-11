import { Box, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function LayoutShift() {
  const [changeWidth, setChangeWidth] = useState(false);

  return (
    <Flex height={"300px"} flexDir={"column"} gap={"20px"} alignItems={"center"}>
      <Box layout mt={"auto"} as={motion.div} w={changeWidth ? "200px" : "100px"} h={changeWidth ? "200px" : "100px"} bg={"orange.100"}></Box>
      <Button onClick={() => setChangeWidth(!changeWidth)}>
        {changeWidth ? "Decrease Width" : "Increase Width"}
      </Button>
    </Flex>
  );
}
