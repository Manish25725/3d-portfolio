const config = {
  title: "Manish Kalwani | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Manish, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Manish, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Manish",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Manish Kalwani",
  email: "kalwani.manish25@gmail.com",
  site: "https://manishkalwani.site",

  // for github stars button
  githubUsername: "Manish25725",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/ManishKalw5206",
    linkedin: "https://www.linkedin.com/in/kalwani7/",
    instagram: "https://www.instagram.com/kalwani.manish25",
    facebook: "https://www.facebook.com/kalwani.manish25/",
    github: "https://github.com/Manish25725",
  },
};
export { config };
