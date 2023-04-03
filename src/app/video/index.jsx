import { Avatar, Card, Grid } from "@mui/material";
import { memo } from "react";
import VideoList from "./list";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Video = () => {
  const bp = { xs: "12", sm: "12", md: "8", lg: "8", xl: "8" };
  const bp1 = { xs: "12", sm: "12", md: "4", lg: "4", xl: "4" };

  return (
    <Grid container spacing={2}>
      <Grid item {...bp}>
        <Card sx={{ minWidth: "auto", flexGrow: 1, width: "100%" }}>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </Card>
        <Grid container>
          <Grid item xs={6}>
            <CardContent sx={{ display: "flex", gap: 3 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <Typography component="div" variant="h5" color="text.primary">
                Live From Space
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="end"
            alignItems="center"
          >
            <IconButton aria-label="play/pause">
              <DownloadIcon />
            </IconButton>
            <IconButton aria-label="previous">
              <ThumbUpIcon />
            </IconButton>
            <IconButton aria-label="next">
              <ShareIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item {...bp1}>
        <VideoList />
      </Grid>
    </Grid>
  );
};

export default memo(Video);
