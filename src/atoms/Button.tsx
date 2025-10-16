import { Button as TButton, styled } from 'tamagui'

export const Button = styled(TButton, {
  borderRadius: '$round',
  fontWeight: '700',
  bw: 1,
  borderColor: '$line',
  color: '$text',
  px: 12,
  py: 8,
  bg: 'rgba(255,255,255,0.06)',
  hoverStyle: { scale: 1.02 },
  variants: {
    solid: {
      true: {
        bg: '$bg2',
      },
    },
  },
})
