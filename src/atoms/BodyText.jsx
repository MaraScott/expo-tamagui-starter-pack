// src/atoms/BodyText.jsx
import React from 'react'
import { Paragraph } from 'tamagui'

export default function BodyText({ children, maxWidth = 560 }) {
  return (
    <Paragraph ta="center" maw={maxWidth}>
      {children}
    </Paragraph>
  )
}
