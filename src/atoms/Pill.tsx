import { XStack, Text, styled } from 'tamagui'
import Svg, { Path } from 'react-native-svg'

export const Pill = styled(XStack, {
  ai: 'center',
  gap: 8,
  px: 14,
  py: 8,
  br: '$round',
  bw: 1,
  borderColor: '$line',
  bc: 'rgba(255,255,255,0.05)',
})

export const StarIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2l2.1 6.5h6.8l-5.5 4 2.1 6.5L12 15l-5.5 4 2.1-6.5-5.5-4h6.8L12 2z" stroke="#22E3FF" />
  </Svg>
)

export const PillText = (props: { children: React.ReactNode }) =>
  <Text fontWeight="700" color="$text">{props.children}</Text>
