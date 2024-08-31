'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image'; 

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import data from '@/lib/data'; 

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

 
  const getRandomProducts = (num) => {
    const shuffledProducts = [...data.products].sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, num); // Pick `num` random products
  };

  
  const randomProducts = getRandomProducts(12);

  return (
    <div className="flex justify-center"> 
      <Carousel
        plugins={[plugin.current]}
        className="w-[320px]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {randomProducts.map((product, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-0 h-64">
                    <Image
                      src={product.image} 
                      alt={product.name}
                      width={300}
                      height={200} 
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
