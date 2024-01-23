import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import NavHeader from "./components/NavHeader";
import Home from "./views/Home";
import { defaultTheme } from "./config/theme";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <ContactUs /> */}
    </ThemeProvider>
  );
}
