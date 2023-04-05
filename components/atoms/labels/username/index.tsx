import { Text } from "@chakra-ui/react";
import React from "react";

export default function UserName({
  username,
  fontSize,
  fontWeight,
  ...rest
}: any) {
  return (
    <Text
      {...rest}
      fontSize={fontSize ? fontSize : "xl"}
      fontWeight={fontWeight ? fontWeight : "semibold"}
    >
      {username}
    </Text>
  );
}
