import { getRoute } from "@/utils/helpers";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export const DefaultWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SubItem() {
  const router = useRouter();
  const { query } = router;

  let ChildComponent = getRoute(`${query["sub-item"]}`);

  return (
    <DefaultWrapper>{ChildComponent}</DefaultWrapper>
  );
}
