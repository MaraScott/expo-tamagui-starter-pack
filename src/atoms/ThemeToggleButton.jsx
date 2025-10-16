// src/atoms/ThemeToggleButton.jsx
import React from 'react'
import { Button } from 'tamagui'

export default function ThemeToggleButton({ isDark, onPress }) {
  return (
    <Button onPress={onPress} br="$3" px="$4">
      Switch to {isDark ? 'Light' : 'Dark'} theme
    </Button>
  )
}
