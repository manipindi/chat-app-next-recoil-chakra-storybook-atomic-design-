import styled from "styled-components";
import MovingBall from "../../framer-components/sub-items/moving-ball";

const Ball = styled.div`
    width: 100px;
    height: 100px;
    background-color: pink;
    border-radius: 50%;
`

export default {
  component: MovingBall,
  argTypes: {
  },
};

export const Default = {
    args : {
        ball : <Ball/>,
        containerWidth : 500,
        ballWidth : 100
    }
};
