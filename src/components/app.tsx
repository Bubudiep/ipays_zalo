import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  App,
  ZMPRouter,
  Page,
  AnimationRoutes,
  SnackbarProvider,
} from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "pages/index";
import About from "pages/about";
import Report from "pages/report";
import User from "pages/user";
import Home from "pages/home";
import Store from "pages/store";

// A higher-order component to pass location.search to the wrapped component
const WithSearchParams = ({ element: Component }) => {
  const location = useLocation();
  return <Component search={location.search} />;
};
// A component to handle redirect with search parameters
const RedirectWithSearch = ({ to }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const storeId = params.get("storeId");
  if (storeId) {
    to = "/store/";
  }
  return <Navigate to={`${to}${location.search}`} />;
};
const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <Routes>
              <Route path="/" element={<HomePage />}>
                <Route path="about" element={<About />} />
                <Route path="report" element={<Report />} />
                <Route path="user" element={<User />} />
                <Route path="store" element={<Store />} />
                <Route path="home" element={<Home />} />
                <Route path="/" element={<RedirectWithSearch to="/home/" />} />
              </Route>
            </Routes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
