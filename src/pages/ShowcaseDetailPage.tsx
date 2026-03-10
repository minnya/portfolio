import { Box, Button, CardMedia, Chip, Link, Typography } from "@mui/material";
import { showcaseCategoryItems } from "../data/ShowcaseData";
import { useParams } from "react-router";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import MuiMarkdown, { defaultOverrides } from "mui-markdown";
import { SocialIcon } from "react-social-icons";

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
      <Box display="flex" gap={1}>
        {[
          { title: "Google Play", url: showcaseItem.googlePlayUrl },
          { title: "Github", url: showcaseItem.githubUrl },
          { title: "Website", url: showcaseItem.websiteUrl },
        ].map(
          (item) =>
            item.url && (
              <Button
                variant="outlined"
                href={item.url}
                target="_blank"
                startIcon={
                  <SocialIcon
                    url={item.url}
                    style={{ height: 30, width: 30 }}
                    target="_blank"
                  />
                }
                endIcon={<OpenInNewIcon />}
              >
                {item.title}
              </Button>
            ),
        )}
      </Box>
      <MuiMarkdown
        overrides={{
          ...defaultOverrides,
          a: ({ ...props }) => (
            <Link {...props} target="_blank" rel="noopener noreferrer" />
          ),
          h4: ({ ...props }) => (
            <Typography
              {...props}
              sx={{ fontFamily: "Segoe UI", fontSize: 20 }}
            />
          ),
        }}
      >
        {showcaseItem.description}
      </MuiMarkdown>
    </Box>
  );
};
