import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RefObject } from "react";

const HeroSection = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref as RefObject<HTMLDivElement>}
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ color: "white", textAlign: "center" }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 700,
              mb: 3,
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Track, Rate, and Review Your Favorite Shows!
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.9,
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Join our community of TV enthusiasts and discover your next
            binge-worthy series
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "white",
              color: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
              px: 4,
              py: 2,
              fontSize: "1.2rem",
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
