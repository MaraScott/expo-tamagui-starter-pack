import { XStack, YStack } from 'tamagui'
import { ReactNode } from 'react'

export function Grid2({ left, right }: { left: ReactNode; right: ReactNode }) {
  // simple responsive 2-col grid
  return (
    <XStack gap={16} fw="wrap">
      <YStack f={1} miw={280} maw="100%" ai="stretch" $gtSm={{ w: '48%' }}>
        {left}
      </YStack>
      <YStack f={1} miw={280} maw="100%" ai="stretch" $gtSm={{ w: '48%' }}>
        {right}
      </YStack>
    </XStack>
  )
}
