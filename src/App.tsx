import { Footer } from "./widgets/Footer";
import { Outlet } from "react-router";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { DashboardLayout, PageContainer } from "@toolpad/core";
import { CardMedia } from "@mui/material";
import { Header } from "./widgets/Header";
import { NAVIGATION } from "./components/Navigation";

const App = () => {
  return (
    <ReactRouterAppProvider
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
        <PageContainer>
          <Outlet />
        </PageContainer>
      </DashboardLayout>

      <Footer />
    </ReactRouterAppProvider>
  );
};

export default App;
