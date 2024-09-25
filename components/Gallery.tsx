import Link from "next/link"
import { HTMLAttributes, useState } from "react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperClass, SwiperOptions } from "swiper/types"
import { ImageWithFallback } from "./ImageWithFallback"
import { PhotoSwipe } from "./PhotoSwipe"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  images: {
    link: string
    title: string
  }[]
  sliderSwiperOptions?: SwiperOptions
  thumbsSwiperOptions?: SwiperOptions
}

export const Gallery = ({
  images,
  sliderSwiperOptions = {},
  thumbsSwiperOptions = {},
  className,
  children,
  ...rest
}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)

  return (
    <PhotoSwipe className={cn("flex flex-col gap-4", className)} {...rest}>
      <div>
        <Swiper
          autoHeight={true}
          className=""
          loop={true}
          spaceBetween={16}
          navigation={true}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          {...sliderSwiperOptions}
        >
          {images.map((image) => (
            <SwiperSlide className="cursor-pointer" key={`${image.title}${image.link}`}>
              <Link prefetch={false} className="select-none" aria-label={image.title} href={image.link} target="_blank">
                <ImageWithFallback
                  className="object-cover"
                  priority={true}
                  width={1024}
                  height={768}
                  src={image.link}
                  alt={image.title}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={16}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          {...thumbsSwiperOptions}
        >
          {images.map((image) => (
            <SwiperSlide className="cursor-pointer" key={`${image.title}${image.link}`}>
              <ImageWithFallback
                className="h-[100px] select-none object-cover"
                priority={true}
                width={480}
                height={480}
                src={image.link}
                alt={image.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {children}
    </PhotoSwipe>
  )
}
