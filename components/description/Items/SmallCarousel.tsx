import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

export const SmallCarousel = () => {
    return (
        <div className='rounded-2xl bg-blend-color bg-blue-200 px-16 py-8 shadow-sm mb-16'>
            <Carousel>
                <CarouselContent>
                    <CarouselItem><Image className="object-center object-contain w-auto h-auto rounded-2xl" alt='image' src={"/bg.png"} width={480} height={640}/></CarouselItem>
                    <CarouselItem><Image className="object-center object-contain w-auto h-auto rounded-2xl" alt='image' src={"/bg.png"} width={480} height={640}/></CarouselItem>
                    <CarouselItem><Image className="object-center object-contain w-auto h-auto rounded-2xl" alt='image' src={"/bg.png"} width={480} height={640}/></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
