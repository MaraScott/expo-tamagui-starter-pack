// src/templates/HomeTemplate.jsx
import React from 'react'
import { YStack } from 'tamagui'
import Hero from '../Molecules/Hero'

export default function HomeTemplate() {
  return (
    <YStack ai="center" jc="center" space="$4">
      <Hero />
    </YStack>
  )
}
