import { BrowserRouter, Route, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
import Home from "./pages/home/home";
import "./App.css";
import ScrollToTop from "./components/utils/ScrollToTop";
import { BackflowBuddy } from "./pages/projects/BackflowBuddy/BackflowBuddy.page";
import { ContactMePage } from "./pages/ContactMe/ContactMe.page";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/backflowbuddy" element={<BackflowBuddy />} />
            <Route path="/get-in-touch" element={<ContactMePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
