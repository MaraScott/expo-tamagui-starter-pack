import { XStack, Text, styled, getTokenValue } from 'tamagui'

export const GradientBadge = styled(XStack, {
  px: 14,
  py: 6,
  br: '$round',
  ai: 'center',
  bg: 'transparent',
  elevation: 2,
  // linear gradient - web friendly via CSS background
  // on native it simply shows transparent background (fine as a badge)
  // If you want a true gradient native & web, use @tamagui/linear-gradient
  style: {
    backgroundImage: `linear-gradient(90deg, ${getTokenValue('$accent')}, ${getTokenValue('$accent2')})`,
    boxShadow: '0 0 18px rgba(0,82,204,0.35)',
  },
})

export const BadgeText = (props: { children: React.ReactNode }) => (
  <Text color="white" fontWeight="700">{props.children}</Text>
)
