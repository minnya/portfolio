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

interface ItemModel {
  title: string;
  image: string;
  description: string;
  url: string;
}

const items: ItemModel[] = [
  {
    title: "Automatic Lyrics",
    description:
      "Automatically find and display the lyrics of the song playing on your Android device without registration or settings, so you can see lyrics instantly while listening.",
    url: "https://play.google.com/store/apps/details?id=com.minnya.showmelyrics",
    image: "automatic-lyrics.png",
  },
  {
    title: "Yamada Voice",
    description:
      "Play iconic voice clips on your Android for laughs, pranks, or sharing with friends anytime.",
    url: "https://play.google.com/store/apps/details?id=com.minnya.yamadavoice",
    image: "yamada-voice.png",
  },
  {
    title: "Satake Voice",
    description:
      "Play iconic voice clips on your Android for laughs, pranks, or sharing with friends anytime.",
    url: "https://play.google.com/store/apps/details?id=com.FreshEngine.satake_voice",
    image: "satake-voice.png",
  },
];

export const ShowcasePage: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h4">Android App</Typography>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid size={{ sm: 6, md: 3 }}>
              <Tooltip title={<Typography>{item.description}</Typography>}>
                <Card variant="outlined" sx={{ borderRadius: 3 }}>
                  <CardActionArea
                    onClick={() => window.open(item.url, "_blank")}
                  >
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
      </Box>
    </Box>
  );
};
