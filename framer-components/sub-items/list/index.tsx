import { motion, Variants } from "framer-motion";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { TriangleDownIcon } from "@chakra-ui/icons";

const Styledbutton = styled(motion.button)`
width: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  color: black;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ListItemContainer = styled(motion.ul)`
  width: 100%;
  height: 200px;
  background-color: #fff;
  color: #000;
  font-weight: 600;
  position: absolute;
  top: 110%;
  left: 0;
  border-radius: 10px;
  padding: 16px;
  list-style-type: none;
  overflow-y: scroll;

  li {
    text-align: left;
    padding-bottom: 16px;
    /* padding: 10px 0; */
  }
`;

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  close: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface ListProps {
  list : { value: string }[];
  icon ?: ReactNode
}

export default function ListComponent({ list, icon }: ListProps) {
  const [isListopen, setListOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={isListopen ? "open" : "close"}
      style={{ position: "relative", width : "300px" }}
    >
      <Styledbutton
        onClick={() => setListOpen(!isListopen)}
        whileTap={{ scale: 0.9 }}
      >
        Menu
        <motion.div
          initial={false}
          transition={{ duration: 0.3 }}
          variants={{
            open: {
              rotate: 180,
            },
            close: {
              rotate: 0,
            },
          }}
        >
          {icon ? icon : <TriangleDownIcon boxSize={3} />}
        </motion.div>
      </Styledbutton>
      <ListItemContainer
        initial={"close"}
        animate={isListopen ? "open" : "close"}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
          close: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
            },
          },
        }}
      >
        {list &&
          list.length &&
          list.map((listItem: any, idx: number) => (
            <motion.li key={idx} variants={itemVariants}>
              {listItem.value}
            </motion.li>
          ))}
      </ListItemContainer>
    </motion.div>
  );
}
