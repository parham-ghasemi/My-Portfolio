
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

function Grid() {
  return (
    
    <div id='about'>
        <BentoGrid>
            {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
                <BentoGridItem id={id} title={title} description={description} className={className} img={img} imgClassName={imgClassName} titleClassName={titleClassName} spareImg={spareImg} />
            ))}
        </BentoGrid>
    </div>
  )
}

export default Grid