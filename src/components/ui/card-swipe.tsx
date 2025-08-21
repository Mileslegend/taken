"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards, Autoplay, Navigation, Pagination } from "swiper/modules"
import { Badge } from "@/components/ui/badge"
import { SparklesIcon } from "lucide-react"

interface CarouselProps {
  images?: { src: string; alt: string }[] // optional to prevent crash
  autoplayDelay?: number
  slideShadows?: boolean
}

export const CardSwipe: React.FC<CarouselProps> = ({
  images = [
    {src: '/a01.png', alt: 'image1' },
    {src: '/a02.png', alt: 'image2' },
    {src: '/a03.png', alt: 'image3' },
    {src: '/a01.png', alt: 'image4' },
    {src: '/a02.png', alt: 'image5' },
    {src: '/a03.png', alt: 'image6' },
  ], // default empty array
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  return (
    <section className="py-4">
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          <Badge
            variant="outline"
            className="absolute left-4 top-6 rounded-[14px] border border-black/10 text-base md:left-6"
          >
            <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
            Best Performers
          </Badge>

          <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
            <h3 className="text-4xl opacity-85 font-bold tracking-tight">Card Swipe</h3>
            <p className="flex items-center gap-1">Be excellent and be featured.</p>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            {images.length > 0 ? (
              <Swiper
                autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
                effect={"cards"}
                grabCursor={true}
                loop={true}
                slidesPerView={"auto"}
                navigation
                pagination={{ clickable: true }}
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
                className="w-full"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="w-full h-full rounded-3xl">
                    <Image
                      src={image.src}
                      width={500}
                      height={500}
                      className="w-full h-full rounded-xl object-cover"
                      alt={image.alt}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="text-center text-gray-500">No images available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
