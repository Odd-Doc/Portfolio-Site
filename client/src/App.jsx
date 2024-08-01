import { BrowserRouter, Route, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
import Home from "./pages/home/home";
import "./App.css";
import ScrollToTop from "./components/utils/ScrollToTop";
import { BackflowBuddy } from "./pages/projects/BackflowBuddy/BackflowBuddy.page";
// import { FontStyles } from "./components/styles";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/backflowbuddy" element={<BackflowBuddy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
