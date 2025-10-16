// src/atoms/Title.jsx
import React from 'react'
import { Text } from 'tamagui'

export default function Strong({ children, ...props }) {
  return (
    <Text fontWeight="700" {...props}>
      {children}
    </Text>
  )
}
