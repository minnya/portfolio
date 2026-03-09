import { Box, Button, CardMedia, Chip, Typography } from "@mui/material";
import { showcaseItems } from "../data/ShowcaseData";
import { useParams } from "react-router";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export const ShowcaseDetailPage: React.FC = () => {
  const { id } = useParams();
  const item = showcaseItems.find((item) => item.id === id);

  if (!item) {
    return <Typography>Item not found</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <CardMedia
        component="img"
        src={item.image}
        sx={{ height: 300, objectFit: "contain", borderRadius: 3 }}
      />
      <Typography variant="h4" fontWeight="bold">
        {item.title}
      </Typography>
      <Chip label="Android" size="small" sx={{ width: "fit-content" }} />
      <Typography variant="body1" color="text.secondary">
        {item.description}
      </Typography>
      <Button
        variant="contained"
        endIcon={<OpenInNewIcon />}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ width: "fit-content" }}
      >
        Google Play
      </Button>
    </Box>
  );
};
