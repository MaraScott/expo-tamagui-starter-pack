// src/organisms/AppShell.jsx
import React from 'react'
import { YStack } from 'tamagui'
import ThemeToggleButton from '@atoms/ThemeToggleButton'

export default function AppShell({ isDark, setIsDark, children }) {
  return (
    <YStack f={1} ai="center" jc="center" bg="$background" p="$5" space="$4">
      {children}
      <ThemeToggleButton
        isDark={isDark}
        onPress={() => setIsDark((v) => !v)}
      />
    </YStack>
  )
}
