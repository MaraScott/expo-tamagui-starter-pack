import { Text, styled } from 'tamagui'

export const CTA = styled(Text, {
  as: 'a',
  px: 20,
  py: 14,
  br: '$md',
  fontWeight: '700',
  color: 'white',
  textDecorationLine: 'none',
  style: {
    backgroundImage: 'linear-gradient(90deg, var(--color-accent), var(--color-accent2))',
  },
})
