import { Box, Button } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

export const BallWrapper = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: orange;
  border-radius: 50%;
`;

export default function Ball() {
  
  const [showBall, setShowBall] = useState(false);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"300px"}
      h={"200px"}
      alignItems={"center"}
    >
      <AnimatePresence>
        {showBall && (
          <BallWrapper
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileTap={{ scale: 0.7 }}
          />
        )}
      </AnimatePresence>
      <Button marginTop={"auto"} onClick={() => setShowBall(!showBall)}>
        {showBall ? "Close" : "Open"}
      </Button>
    </Box>
  );
}
