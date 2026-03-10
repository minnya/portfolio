import { Footer } from "./components/Footer";
import { Outlet } from "react-router";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { DashboardLayout, PageContainer } from "@toolpad/core";
import { CardMedia, createTheme } from "@mui/material";
import { Header } from "./components/Header";
import { NAVIGATION } from "./cores/Navigation";

const App = () => {
  const theme = createTheme({
    typography: { fontFamily: `Segoe UI` },
    palette: { primary: { main: "#444" } },
  });
  return (
    <ReactRouterAppProvider
      theme={theme}
      navigation={NAVIGATION}
      branding={{
        title: "Hiro Miyoshi",
        logo: (
          <CardMedia
            component="img"
            src="avatar.jpg"
            sx={{ borderRadius: "50%", height: 30 }}
          />
        ),
      }}
    >
      <DashboardLayout hideNavigation slots={{ toolbarActions: Header }}>
        <PageContainer sx={{ flex: 1 }}>
          <Outlet />
        </PageContainer>
        <Footer />
      </DashboardLayout>
    </ReactRouterAppProvider>
  );
};

export default App;
