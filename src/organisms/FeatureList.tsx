import { Paragraph, Text, YStack } from 'tamagui'
import { GlowH2, Muted } from '@atoms/Text'

export function BulletList({ title, bullets }: { title: string; bullets: React.ReactNode[] }) {
  return (
    <YStack gap={6}>
      <GlowH2>{title}</GlowH2>
      <YStack gap={6}>
        {bullets.map((b, i) => (
          <Paragraph key={i} size="$3">{b}</Paragraph>
        ))}
      </YStack>
    </YStack>
  )
}

export const Yes = ({ children }: { children?: React.ReactNode }) => (
  <Text color="$yes" fontWeight="700">{children ?? 'Oui'}</Text>
)
