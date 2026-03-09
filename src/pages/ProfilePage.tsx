import { Box, CardMedia, Divider, Typography } from "@mui/material";

export const ProfilePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Hirokazu Miyoshi
      </Typography>
      <CardMedia
        component="img"
        src="avatar.jpg"
        sx={{
          borderRadius: "50%",
          height: 200,
          width: 200,
          objectFit: "contain",
        }}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="body1" fontWeight="bold">
          Software Engineer
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Python, React Typescript, Azure etc.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5">About me</Typography>
        <Divider orientation="horizontal" />
        <Typography sx={{ pt: 2 }}>
          I am a software engineer with a master’s degree in engineering from
          Waseda University in Japan. Over the past five years, I have worked on
          building and maintaining web applications and backend systems, with a
          focus on creating reliable and scalable software.
          <br />
          <br />
          My experience includes full-stack development, cloud infrastructure,
          and system integration. I enjoy working across the stack—from
          designing application logic and APIs to deploying services in cloud
          environments. I am particularly interested in building systems that
          are both technically robust and practical for real-world users.
          <br />
          <br />
          In recent projects, I have been working with modern web technologies
          and cloud platforms to develop applications that integrate backend
          services, authentication systems, and scalable infrastructure. I value
          clean architecture, maintainable code, and thoughtful system design.
          <br />
          <br />
          Through my work, I aim to continuously improve my engineering skills
          while contributing to projects that solve meaningful problems.
        </Typography>
      </Box>
    </Box>
  );
};
