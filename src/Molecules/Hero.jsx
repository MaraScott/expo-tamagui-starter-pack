// src/molecules/Hero.jsx
import React from 'react'
import { YStack } from 'tamagui'
import Title from '../Atoms/Title'
import Strong from '../Atoms/Strong'
import BodyText from '../Atoms/BodyText'

export default function Hero() {
  return (
    <YStack ai="center" jc="center" space="$4">
      <Title>Your Custom Tamagui Config</Title>
      <BodyText>
        Tokens, themes, fonts, shorthands, and defaults are now controlled by{' '}
        <BodyText>
          <Strong>tamagui.config.ts</Strong>
        </BodyText>
        .
      </BodyText>
    </YStack>
  )
}
