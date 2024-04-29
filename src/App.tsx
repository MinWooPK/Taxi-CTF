import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import NavHeader from "./components/NavHeader";
import Home from "./views/Home";
import { defaultTheme } from "./config/theme";
import GetTaxiPage from "./views/GetTaxi";
import ServicesPage from "./views/Services";
import TariffsPage from "./views/Tariffs";
import ContactPage from "./views/Contact";
import AboutUsPage from "./views/AboutUs";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/Tariffs" element={<TariffsPage />} />
            <Route path="/Servicios" element={<ServicesPage />} />
            <Route path="/GetTaxi" element={<GetTaxiPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Info" element={<AboutUsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
