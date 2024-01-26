import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import NavHeader from "./components/NavHeader";
import Home from "./views/Home";
import { defaultTheme } from "./config/theme";
import Services from "./views/Services";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavHeader />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="portfolio" element={<Home />} />{" "}
            <Route path="Servicios" element={<Services />} />{" "}
            <Route path="portfolio" element={<Home />} />
            <Route path="portfolio" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <ContactUs /> */}
    </ThemeProvider>
  );
}
