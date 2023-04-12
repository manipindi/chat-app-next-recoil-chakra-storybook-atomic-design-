import { Box } from "@chakra-ui/react";
import { Reorder, motion } from "framer-motion";
import React, { useState } from "react";
import Item from "./item";

const listtss = ["HTML", "CSS", "JS", "REACT", "NEXT"];

export default function ReorderItems() {
  const [list, setList] = useState(listtss);
  console.log(list);

  return (
    <Box w={"200px"}>
      <Reorder.Group
        style={{ listStyleType: "none" }}
        axis="y"
        values={list}
        onReorder={setList}
      >
        {list.map((item: any) => (
          <Item key={item} item={item} />
        ))}
      </Reorder.Group>
    </Box>
  );
}
