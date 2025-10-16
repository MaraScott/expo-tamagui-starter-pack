import { XStack, YStack, Spacer } from 'tamagui'
import { Pill, PillText, StarIcon } from '@atoms/Pill'
import { PillButton } from '@atoms/Button'
import { GradientBadge, BadgeText } from '@atoms/Badge'
import { Platform } from 'react-native'

type Props = {
  onToggleTheme: () => void
  onPrint?: () => void
}

export function HeaderBar({ onToggleTheme, onPrint }: Props) {
  const canPrint = Platform.OS === 'web'
  return (
    <XStack ai="center" jc="space-between" gap={20}>
      <Pill>
        <StarIcon />
        <PillText>Maison de Vacances</PillText>
      </Pill>

      <XStack ai="center" gap={10}>
        <PillButton onPress={onToggleTheme}>🌓 Mode</PillButton>
        {canPrint && <PillButton onPress={onPrint}>🖨️ PDF</PillButton>}
        <GradientBadge><BadgeText>Classement ★★★</BadgeText></GradientBadge>
      </XStack>
    </XStack>
  )
}
