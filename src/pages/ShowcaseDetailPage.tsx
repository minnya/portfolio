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
import type { ShowcaseItemModel } from "../models/ShowcaseItemModel";
import { showcaseItems } from "../data/ShowcaseData";
import { useParams } from "react-router";

export const ShowcaseDetailPage: React.FC = () => {
  const { id } = useParams();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h4">Android App</Typography>
      {JSON.stringify(showcaseItems.find((item) => item.id == id))}
    </Box>
  );
};
