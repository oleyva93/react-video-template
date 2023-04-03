import { createTheme, ThemeProvider } from "@mui/material";
import Video from "./app/video";
import Layout from "./shared/layout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Video />
      </Layout>
      ;
    </ThemeProvider>
  );
}

export default App;
