import { XStack, YStack, Text } from 'tamagui'
import { CTA } from '@atoms/CTA'
import { GlowH2, Muted } from '@atoms/Text'

export function FooterContact() {
  return (
    <XStack ai="center" jc="space-between" gap={10} fw="wrap">
      <YStack>
        <GlowH2>📞 Contact & Réservation</GlowH2>
        <Text>
          <Text fontWeight="700">Hôte :</Text> David <Text className="obf">********A</Text>{'\n'}
          <Text fontWeight="700">Téléphone :</Text> <Text id="tel">(+33) 6 00 00 00 00</Text>{'\n'}
          <Text fontWeight="700">E-mail :</Text> <Text id="email">contact@example.com</Text>{'\n'}
          <Text fontWeight="700">Site / Airbnb :</Text> <Muted>à venir</Muted>
        </Text>
      </YStack>
      <CTA href="#reservation">Vérifier les disponibilités</CTA>
    </XStack>
  )
}
