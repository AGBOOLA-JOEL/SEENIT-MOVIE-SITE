import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RefObject } from "react";

interface Review {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  show: string;
  rating: number;
  comment: string;
  date: string;
}

// Mock data - replace with actual API data
const latestReviews: Review[] = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "/images/avatars/user1.jpg",
    },
    show: "Breaking Bad",
    rating: 5,
    comment:
      "One of the greatest TV shows ever made. The character development is outstanding!",
    date: "2024-03-15",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatar: "/images/avatars/user2.jpg",
    },
    show: "Game of Thrones",
    rating: 4,
    comment:
      "The first few seasons were incredible. The ending could have been better though.",
    date: "2024-03-14",
  },
  {
    id: 3,
    user: {
      name: "Mike Johnson",
      avatar: "/images/avatars/user3.jpg",
    },
    show: "Stranger Things",
    rating: 5,
    comment:
      "Perfect blend of nostalgia and modern storytelling. Can't wait for the next season!",
    date: "2024-03-13",
  },
];

const LatestReviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ py: 8 }}>
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
            Latest Reviews
          </Typography>
          <Grid container spacing={4}>
            {latestReviews.map((review) => (
              <Grid item xs={12} md={4} key={review.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar
                        src={review.user.avatar}
                        alt={review.user.name}
                        sx={{ mr: 2 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {review.user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {review.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {review.show}
                    </Typography>
                    <Rating value={review.rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body2" color="text.secondary">
                      {review.comment}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LatestReviews;
