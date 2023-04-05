import { Button } from '@chakra-ui/react'
import React from 'react'

export const ButtonWithIcon = ({children, bg , size, ...rest}:any) => {
  return (
    <Button bg={`${bg}`} size={size} {...rest}>{children}</Button>
  )
}
