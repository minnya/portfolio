import { Box, Button, CardMedia, Chip, Link, Typography } from "@mui/material";
import { showcaseCategoryItems } from "../data/ShowcaseData";
import { useParams } from "react-router";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import MuiMarkdown, { defaultOverrides } from "mui-markdown";

export const ShowcaseDetailPage: React.FC = () => {
  const { category, id } = useParams();
  const categoryItem = showcaseCategoryItems.find(
    (item) => item.category === category,
  );
  const showcaseItem = categoryItem?.items.find((item) => item.id == id);

  if (!showcaseItem) {
    return <Typography>Item not found</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <CardMedia
        component="img"
        src={showcaseItem.image}
        sx={{ height: 300, objectFit: "contain", borderRadius: 3 }}
      />
      <Typography variant="h4" fontWeight="bold">
        {showcaseItem.title}
      </Typography>
      <Box>
        {showcaseItem.tags?.map((tag) => (
          <Chip
            label={tag}
            size="small"
            sx={{ width: "fit-content", mx: 0.5 }}
          />
        ))}
      </Box>
      {showcaseItem.googlePlayUrl && (
        <Button
          variant="contained"
          endIcon={<OpenInNewIcon />}
          href={showcaseItem.googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ width: "fit-content" }}
        >
          Google Play
        </Button>
      )}
      {showcaseItem.githubUrl && (
        <Button
          variant="contained"
          endIcon={<OpenInNewIcon />}
          href={showcaseItem.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ width: "fit-content" }}
        >
          Github Repository
        </Button>
      )}
      {showcaseItem.websiteUrl && (
        <Button
          variant="contained"
          endIcon={<OpenInNewIcon />}
          href={showcaseItem.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ width: "fit-content" }}
        >
          Website
        </Button>
      )}
      <MuiMarkdown
        overrides={{
          ...defaultOverrides,
          a: ({ ...props }) => (
            <Link {...props} target="_blank" rel="noopener noreferrer" />
          ),
        }}
      >
        {showcaseItem.description}
      </MuiMarkdown>
    </Box>
  );
};
