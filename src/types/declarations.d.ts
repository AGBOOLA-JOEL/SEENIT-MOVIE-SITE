declare module "swiper/react" {
  import { FC } from "react";
  import { SwiperOptions } from "swiper/types";

  export const Swiper: FC<SwiperOptions & { children: React.ReactNode }>;
  export const SwiperSlide: FC<{ children: React.ReactNode }>;
}

declare module "swiper/modules" {
  export const Navigation: any;
  export const Pagination: any;
  export const Autoplay: any;
}

declare module "framer-motion" {
  export const motion: {
    div: any;
  };
}

declare module "react-intersection-observer" {
  import { RefObject } from "react";

  export function useInView(options?: {
    threshold?: number | number[];
    triggerOnce?: boolean;
    rootMargin?: string;
  }): [RefObject<Element>, boolean];
}
