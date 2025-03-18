declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

declare module "swiper/react" {
  export { Swiper, SwiperSlide } from "swiper/types";
}

declare module "react-intersection-observer" {
  export function useInView(options?: {
    threshold?: number | number[];
    triggerOnce?: boolean;
    rootMargin?: string;
  }): [RefObject<Element>, boolean];
}
