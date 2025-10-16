// src/molecules/Hero.jsx
import React from 'react'
import { YStack } from 'tamagui'
import Title from '@atoms/Title'
import Strong from '@atoms/Strong'
import BodyText from '@atoms/BodyText'

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
