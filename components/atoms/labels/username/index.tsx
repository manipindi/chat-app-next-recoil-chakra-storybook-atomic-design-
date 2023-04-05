import { Text } from '@chakra-ui/react'
import React from 'react'


export default function UserName({username, ...rest}:any) {
  return (
    <Text {...rest} fontSize={"xl"} fontWeight="semibold">
    {username}
  </Text>
  )
}
