import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router";
import { showcaseCategoryItems } from "../data/ShowcaseData";

export const ShowcasePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (!location.pathname.endsWith("/showcase")) return <Outlet />;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {showcaseCategoryItems.map((categoryItem) => (
        <Box>
          <Typography variant="h5" fontWeight="bold">
            {categoryItem.category}
          </Typography>

          <Grid container spacing={2}>
            {categoryItem.items.map((showcaseItem) => (
              <Grid size={{ sm: 6, md: 4 }}>
                <Card variant="outlined" sx={{ borderRadius: 3 }}>
                  <CardActionArea
                    onClick={() =>
                      navigate(
                        `/showcase/${categoryItem.category}/${showcaseItem.id}`,
                      )
                    }
                  >
                    <CardMedia
                      component="img"
                      src={showcaseItem.image}
                      sx={{ objectFit: "contain" }}
                    />
                    <CardContent>
                      <Typography variant="h6">{showcaseItem.title}</Typography>
                      {showcaseItem.tags?.map((tag) => (
                        <Chip
                          label={tag}
                          size="small"
                          sx={{ width: "fit-content", m: 0.5 }}
                        />
                      ))}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};
