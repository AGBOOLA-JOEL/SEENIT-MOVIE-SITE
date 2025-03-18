import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RefObject } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Show {
  id: number;
  title: string;
  image: string;
  rating: number;
}

// Mock data - replace with actual API data
const trendingShows: Show[] = [
  {
    id: 1,
    title: "Breaking Bad",
    image: "/images/shows/breaking-bad.jpg",
    rating: 9.5,
  },
  {
    id: 2,
    title: "Game of Thrones",
    image: "/images/shows/got.jpg",
    rating: 9.3,
  },
  {
    id: 3,
    title: "Stranger Things",
    image: "/images/shows/stranger-things.jpg",
    rating: 8.7,
  },
  // Add more shows...
];

const TrendingShows = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <motion.div
          ref={ref as RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ mb: 4, textAlign: "center", fontWeight: 700 }}
          >
            Trending TV Shows
          </Typography>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {trendingShows.map((show) => (
              <SwiperSlide key={show.id}>
                <Box
                  sx={{
                    position: "relative",
                    height: "400px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={show.image}
                    alt={show.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.8))",
                      color: "white",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {show.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Rating: {show.rating}/10
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TrendingShows;
