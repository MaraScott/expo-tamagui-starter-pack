import { YStack, styled, Text, Image as TImage } from 'tamagui'

const HeroWrap = styled(YStack, {
  my: 18,
  br: '$lg',
  ov: 'hidden',
  bc: '#0F1532',
  bw: 1,
  borderColor: '$line',
  position: 'relative',
  h: 'auto',
})

const Overlay = styled(YStack, {
  position: 'absolute',
  t: 0, l: 0, r: 0, b: 0,
  ai: 'flex-start',
  jc: 'flex-end',
  px: 20, py: 20,
  // web gradient overlay
  style: {
    background: 'linear-gradient(180deg, rgba(5,10,20,0), rgba(5,10,20,.75) 65%, rgba(5,10,20,.9))',
  },
})

const Image = styled(TImage, {
  position: 'relative',
  width: '100%',
  height: 'auto',
})

export function Hero(props: { src: object; title: string; alt?: string }) {
  return (
    <HeroWrap>
      <Image
        source={props.src}
        alt={props.alt ?? props.title}
      />
      <Overlay>
        <Text fontSize={38} lineHeight={44} color="$glow" fontWeight="700">
          {props.title}
        </Text>
      </Overlay>
    </HeroWrap>
  )
}
