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

const Shot = styled(Image, {
    width: '100%',
    height: 210,
    objectFit: 'cover',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333333',
    borderStyle: 'solid',
    overflow: 'hidden',    // ensures rounded corners render cleanly
})

export function Gallery({ images }: { images: { src: any; alt: string }[] }) {
  return (
    <Grid>
      {images.map((img, i) => (
        <Shot key={i} source={{uri: img.src.uri, height: 210}} alt={img.alt} {...(!isWeb && { width: '32%' })}/>
      ))}
    </Grid>
  )
}
