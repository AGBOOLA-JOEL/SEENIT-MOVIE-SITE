import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About SeenIt
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your go-to platform for tracking, rating, and reviewing your
              favorite TV shows. Join our community of TV enthusiasts and
              discover your next binge-worthy series.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/terms" color="inherit" underline="hover">
                Terms of Service
              </Link>
              <Link href="/privacy" color="inherit" underline="hover">
                Privacy Policy
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FaFacebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <FaTwitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <FaInstagram />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <FaLinkedin />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} SeenIt. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
