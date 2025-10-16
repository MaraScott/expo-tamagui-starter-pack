// src/atoms/Title.jsx
import React from 'react'
import { H1 } from 'tamagui'

export default function Title({ children }) {
  return (
    <H1 ta="center" als="center">
      {children}
    </H1>
  )
}
