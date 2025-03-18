import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RefObject } from "react";

interface WatchedShow {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  show: string;
  episode: string;
  timestamp: string;
}

// Mock data - replace with actual API data
const recentlyWatched: WatchedShow[] = [
  {
    id: 1,
    user: {
      name: "Sarah Wilson",
      avatar: "/images/avatars/user4.jpg",
    },
    show: "The Last of Us",
    episode: "S1E3",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "David Brown",
      avatar: "/images/avatars/user5.jpg",
    },
    show: "Succession",
    episode: "S4E2",
    timestamp: "3 hours ago",
  },
  {
    id: 3,
    user: {
      name: "Emma Davis",
      avatar: "/images/avatars/user6.jpg",
    },
    show: "The Mandalorian",
    episode: "S3E5",
    timestamp: "4 hours ago",
  },
];

const RecentlyWatched = () => {
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
            Recently Watched by Friends
          </Typography>
          <Grid container spacing={3}>
            {recentlyWatched.map((item) => (
              <Grid item xs={12} md={4} key={item.id}>
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
                        src={item.user.avatar}
                        alt={item.user.name}
                        sx={{ mr: 2 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {item.user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.timestamp}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {item.show}
                    </Typography>
                    <Chip
                      label={item.episode}
                      color="primary"
                      size="small"
                      sx={{ mb: 2 }}
                    />
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

export default RecentlyWatched;
