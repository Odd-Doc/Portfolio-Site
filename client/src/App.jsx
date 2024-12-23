import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import "./App.css";
import ScrollToTop from "./components/utils/ScrollToTop";
import { BackflowBuddy } from "./pages/projects/BackflowBuddy/BackflowBuddy.page";
import { ContactMePage } from "./pages/ContactMe/ContactMe.page";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import { ContactSuccess } from "./pages/success/contactSuccess.page";
import { FranksRelocation } from "./pages/projects/FranksRelocation/FranksRelocation.page";
import { DeviceSentinel } from "./pages/projects/DeviceSentinel/DeviceSentinel.page";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects/devicesentinel"
              element={<DeviceSentinel />}
            />

            <Route path="/projects/backflowbuddy" element={<BackflowBuddy />} />
            <Route
              path="/projects/franksrelocation"
              element={<FranksRelocation />}
            />
            <Route path="/get-in-touch" element={<ContactMePage />} />
            <Route path="/contact-follow-up" element={<ContactSuccess />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
