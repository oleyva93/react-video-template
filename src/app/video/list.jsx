import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tab,
  Tabs,
  useTheme,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function AlignItemsList() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        ml: "12px",
        borderRadius: "4px",
      }}
    >
      <Box className="border-b border-[#3e3e3e]">
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          slotProps={{
            endScrollButtonIcon: {
              style: { color: "white" },
            },
            startScrollButtonIcon: {
              style: { color: "white" },
            },
          }}
        >
          <Tab label="Sad cats" />
          <Tab label="sick cats" />
          <Tab label="cute cats" />
          <Tab label="Big cats" />
          <Tab label="Boss cats" />
          <Tab label="Furry cats" />
          <Tab label="Green cats" />
        </Tabs>
      </Box>
      <List>
        <ListItem alignItems="flex-start">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{ flex: "1 0 auto" }}
                className="bg-[bg-zinc-800]"
              >
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <BookmarkBorderIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://catscornervet.com/wp-content/uploads/2016/04/kitty-1.png"
              alt="Live from space album cover"
            />
          </Card>
        </ListItem>
        <ListItem alignItems="flex-start">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{ flex: "1 0 auto" }}
                className="bg-[bg-zinc-800]"
              >
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <BookmarkBorderIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/220px-Felis_catus-cat_on_snow.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </ListItem>
        <ListItem alignItems="flex-start">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{ flex: "1 0 auto" }}
                className="bg-[bg-zinc-800]"
              >
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <BookmarkBorderIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://mymodernmet.com/wp/wp-content/uploads/2017/11/minimalist-cat-art-subreddit-10.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </ListItem>
        <ListItem alignItems="flex-start">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{ flex: "1 0 auto" }}
                className="bg-[bg-zinc-800]"
              >
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <BookmarkBorderIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </ListItem>
        <ListItem alignItems="flex-start">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{ flex: "1 0 auto" }}
                className="bg-[bg-zinc-800]"
              >
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <BookmarkBorderIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://s7d1.scene7.com/is/image/PETCO/new-kitten-guide-090517-cat-featured-355w-200h-d"
              alt="Live from space album cover"
            />
          </Card>
        </ListItem>
        <ListItem alignItems="flex-start">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{ flex: "1 0 auto" }}
                className="bg-[bg-zinc-800]"
              >
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <BookmarkBorderIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://catscornervet.com/wp-content/uploads/2016/04/kitty-1.png"
              alt="Live from space album cover"
            />
          </Card>
        </ListItem>
        <ListItem alignItems="flex-start">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{ flex: "1 0 auto" }}
                className="bg-[bg-zinc-800]"
              >
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <BookmarkBorderIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Black_white_cat_on_fence.jpg/220px-Black_white_cat_on_fence.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </ListItem>
        <ListItem alignItems="flex-start">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{ flex: "1 0 auto" }}
                className="bg-[bg-zinc-800]"
              >
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <BookmarkBorderIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://cdn-images-1.medium.com/v2/resize:fit:1600/1*mONNI1lG9VuiqovpnYqicA.jpeg"
              alt="Live from space album cover"
            />
          </Card>
        </ListItem>
        <ListItem alignItems="flex-start">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{ flex: "1 0 auto" }}
                className="bg-[bg-zinc-800]"
              >
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <BookmarkBorderIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350"
              alt="Live from space album cover"
            />
          </Card>
        </ListItem>
      </List>
    </Box>
  );
}
