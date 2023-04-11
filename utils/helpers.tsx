import Ball from "@/framer-components/sub-items/ball";
import ListComponent from "@/framer-components/sub-items/list";
import MovingBall from "@/framer-components/sub-items/moving-ball";
import { ReactNode, cloneElement } from "react";

const list = [
  {value : "Red"},
  {value : "Green"},
  {value : "Orange"},
  {value : "Violet"},
  {value : "Blue"},
  {value : "Pink"},
  {value : "Aliceblue"},
]

// const List = cloneElement(ListComponent, { name : "mani"});

export const getRoute = (route: string):ReactNode => {
  if (route !== null) {
    switch (route) {
      case "ball":
        return <Ball/>;
      case "list":
        return <ListComponent list={list}/>;
      case 'moving-ball':
        return <MovingBall/>;
    }
  }else <div/>
};
