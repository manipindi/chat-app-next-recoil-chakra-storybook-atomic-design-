import { Box, Button, Flex } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import { BallWrapper } from "../ball";
import { motion } from "framer-motion";



interface movingballProps {
  ball?: ReactNode;
  containerWidth?: number
  ballWidth ?: number
}

export default function MovingBall({ ball, containerWidth , ballWidth }: movingballProps) {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);

  const isCustomBall = (ballWidth && containerWidth ? containerWidth-ballWidth : 350)

  const boxVariants = {
    topleft: {
      x: 0,
      y: 0,
    },
    topright: {
      x: isCustomBall,
      y: 0,
    },
    bottomleft: {
      x: 0,
      y: isCustomBall,
    },
    bottomright: {
      x: isCustomBall,
      y: isCustomBall,
    },
  };

  const rightHandler = () => {
    if (xPosition === 0) {
      setXPosition(350);
    } else {
      return;
    }
  };

  const leftHandler = () => {
    if (xPosition === 0) {
      return;
    } else {
      setXPosition(0);
    }
  };

  const bottomHandler = () => {
    if (yPosition === 0) {
      setYPosition(350);
    } else {
      return;
    }
  };

  const topHandler = () => {
    if (yPosition === 0) {
      return;
    } else {
      setYPosition(0);
    }
  };

  const getPosition = (xDir: number, yDir: number): string => {
    if (xDir === 0 && yDir === 0) {
      return "topleft";
    } else if (xDir === 0 && yDir !== 0) {
      return "bottomleft";
    } else if (xDir !== 0 && yDir === 0) {
      return "topright";
    } else if (xDir !== 0 && yDir !== 0) {
      return "bottomright";
    } else {
      return "";
    }
  };

  let position = getPosition(xPosition, yPosition);

  const getDirection = (dire: string) => {
    if (dire) {
      switch (dire) {
        case "topleft":
          return "topleft";
        case "topright":
          return "topright";
        case "bottomleft":
          return "bottomleft";
        case "bottomright":
          return "bottomright";
      }
    }
  };

  let boxDirection = getDirection(position);

  return (
    <Box width={"500px"}>
      <motion.div
        style={{ width: "500px", height: "500px", background: "#2D3748" }}
      >
        {ball ? (
          <motion.div
            initial={false}
            transition={{ duration: 0.8 }}
            variants={boxVariants}
            animate={boxDirection}
          >
            {ball}
          </motion.div>
        ) : (
          <BallWrapper
            initial={false}
            transition={{ duration: 0.8 }}
            variants={boxVariants}
            animate={boxDirection}
          />
        )}
      </motion.div>
      <Flex mt={2} justifyContent={"space-between"}>
        <Button onClick={rightHandler}>Right</Button>
        <Button onClick={leftHandler}>Left</Button>
        <Button onClick={bottomHandler}>Bottom</Button>
        <Button onClick={topHandler}>Top</Button>
      </Flex>
    </Box>
  );
}
