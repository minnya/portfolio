import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { showcaseItems } from "../data/ShowcaseData";

export const ShowcasePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      {showcaseItems.map((item) => (
        <Grid size={{ sm: 6, md: 3 }}>
          <Tooltip title={<Typography>{item.description}</Typography>}>
            <Card variant="outlined" sx={{ borderRadius: 3 }}>
              <CardActionArea onClick={() => navigate(`/showcase/${item.id}`)}>
                <CardMedia component="img" src={item.image} />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
};
