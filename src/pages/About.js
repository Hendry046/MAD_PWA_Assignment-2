import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          textAlign: "center",
          p: 11,
          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
          "& p": { textAlign: "justify" },
          "@media (max-width: 600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to CafeZilla</Typography>
        <p>
        Welcome to CafeZilla, where culinary passion meets innovation to redefine the dining experience in the heart of Mumbai. Our journey began with a vision to create a haven for food enthusiasts, a place where every dish tells a story and every bite leaves a lasting impression. At CafeZilla, we're committed to exceeding your expectations. Our team is dedicated to delivering exceptional dishes and services, rooted in quality, integrity, and continuous improvement. From the moment you step through our doors, you'll be greeted with warmth and hospitality, as we strive to understand your unique preferences and craft tailored culinary experiences just for you. From our carefully curated menu to our cozy ambiance, every aspect of CafeZilla is designed to create unforgettable dining moments. Join us on a journey of flavors, where each dish is a masterpiece and every visit is a celebration of food, friendship, and unforgettable memories. Welcome to CafeZilla, where every meal is an adventure.
        </p>
        <br />
        <p>
        Beyond our culinary creations, CafeZilla is dedicated to making a positive impact on our community and the environment. We believe in sustainability, social responsibility, and ethical business practices as essential pillars of our mission. Through sustainable sourcing, waste reduction efforts, and community engagement initiatives, we aim to contribute meaningfully to society while preserving our planet for future generations. Join us at CafeZilla on this exciting journey as we continue to innovate, grow, and make a difference in the world, one delightful dish at a time. Thank you for choosing CafeZilla for your dining experience. Here's to good food, great memories, and a brighter tomorrow!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
