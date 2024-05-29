import React from "react"

export type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>&{
    imageSize?: 'image-sm' | 'image-md' | 'image-lg',
    cardOrientation?: 'vertical' | 'horizontal',
}