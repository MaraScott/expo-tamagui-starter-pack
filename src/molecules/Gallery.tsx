import { XStack, Image, styled } from 'tamagui'
import { isWeb } from '@tamagui/constants'

const Grid = styled(XStack, {
    ...(isWeb
    ? {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 10,
      }
    : {
        flexWrap: 'wrap',
        gap: 10,
        jc: 'space-between',
      }),
})

const ShotFrame = styled(XStack, {
    width: '100%',
    height: 210,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333333',
    borderStyle: 'solid',
    overflow: 'hidden',
})

const ShotImage = styled(Image, {
  width: '100%',
  height: '100%',
  flex: 1,
  objectFit: 'cover',
})

export function Gallery({ images }: { images: { src: any; alt: string }[] }) {
  return (
    <Grid>
      {images.map((img, i) => (
        <ShotFrame key={i} {...(!isWeb && { width: '32%' })}>
          <ShotImage source={{ uri: img.src.uri, width: '100%' }} alt={img.alt} />
        </ShotFrame>
      ))}
    </Grid>
  )
}
