import Image from 'next/image'

export default function Poster({ src, alt, width, height }) {
  const image = src !== 'N/A' ? src : `https://via.placeholder.com/${width}x${height}`
  return (
    <Image
      src={image}
      alt={alt}
      width={width}
      height={height}
    />
  )
}
