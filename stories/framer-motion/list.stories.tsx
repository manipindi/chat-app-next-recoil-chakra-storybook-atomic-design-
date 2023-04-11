import styled from "styled-components";
import ListComponent from "../../framer-components/sub-items/list";

const Icon = styled.div`
   transform: rotate(90deg);
`

export default {
  component: ListComponent,
};

export const Default = {
  args: {
    list: [
      { value: "Monday" },
      { value: "Tuesday" },
      { value: "Wednesday" },
      { value: "Thursday" },
      { value: "Friday" },
      { value: "Saturday" },
      { value: "Sunday" },
    ],
    icon : <Icon>{'>'}</Icon>
  },
};
