import Ball from "@/framer-components/sub-items/ball";
import Example from "@/framer-components/sub-items/example";
import LayoutShift from "@/framer-components/sub-items/layout-shift";
import ListComponent from "@/framer-components/sub-items/list";
import MovingBall from "@/framer-components/sub-items/moving-ball";
import ScrollExample from "@/framer-components/sub-items/scroll-examples/scroll-linked";
import ScrollTriggered from "@/framer-components/sub-items/scroll-examples/scroll-triggered";
import { ReactNode, cloneElement } from "react";

const list = [
  { value: "Red" },
  { value: "Green" },
  { value: "Orange" },
  { value: "Violet" },
  { value: "Blue" },
  { value: "Pink" },
  { value: "Aliceblue" },
];

// const List = cloneElement(ListComponent, { name : "mani"});

export const getRoute = (route: string): ReactNode => {
  if (route !== null) {
    switch (route) {
      case "ball":
        return <Ball />;
      case "list":
        return <ListComponent list={list} />;
      case "moving-ball":
        return <MovingBall />;
      case "layout-example":
        return <LayoutShift />;
      case "example":
        return <Example />;
      case "scroll-example":
        return <ScrollExample />;
      case "scroll-triggered":
        return <ScrollTriggered/>;
    }
  } else <div />;
};
