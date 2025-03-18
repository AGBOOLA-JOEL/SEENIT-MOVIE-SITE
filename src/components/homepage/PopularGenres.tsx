import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Mock data - replace with actual API data
const genres = [
  {
    id: 1,
    name: "Drama",
    image: "/images/genres/drama.jpg",
    count: 150,
  },
  {
    id: 2,
    name: "Comedy",
    image: "/images/genres/comedy.jpg",
    count: 120,
  },
  {
    id: 3,
    name: "Sci-Fi",
    image: "/images/genres/scifi.jpg",
    count: 80,
  },
  {
    id: 4,
    name: "Thriller",
    image: "/images/genres/thriller.jpg",
    count: 90,
  },
  {
    id: 5,
    name: "Fantasy",
    image: "/images/genres/fantasy.jpg",
    count: 70,
  },
  {
    id: 6,
    name: "Action",
    image: "/images/genres/action.jpg",
    count: 100,
  },
];

const PopularGenres = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ mb: 4, textAlign: "center", fontWeight: 700 }}
          >
            Popular Genres
          </Typography>
          <Grid container spacing={3}>
            {genres.map((genre) => (
              <Grid item xs={12} sm={6} md={4} key={genre.id}>
                <Card
                  sx={{
                    height: "200px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover": {
                      "& .MuiCardMedia-root": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={genre.image}
                    alt={genre.name}
                    sx={{
                      height: "100%",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.7))",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ color: "white", fontWeight: 600 }}
                    >
                      {genre.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", opacity: 0.8 }}
                    >
                      {genre.count} shows
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PopularGenres;
