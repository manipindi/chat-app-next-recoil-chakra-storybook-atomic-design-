import { Box } from "@chakra-ui/react";
import { Reorder } from "framer-motion";
import React from "react";

export default function Item({ item }: any) {
  return (
    <Reorder.Item
      value={item}
      id={item}
      style={{
        background: "white",
        color: "black",
        textAlign: "center",
        marginBottom: "10px",
      }}
    >
      <Box padding={"10px"}>{item}</Box>
    </Reorder.Item>
  );
}
