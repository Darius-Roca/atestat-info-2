import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import Intro from "./pages/intro"
import Constelatii from "./pages/constelatii"
import Cosmologie from "./pages/cosmologie"
import Legi from "./pages/legi"
import Realizari from "./pages/realizari"
import Header from "./components/Header"
import Footer from "./components/Footer"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/constelatii" element={<Constelatii />} />
          <Route path="/cosmologie" element={<Cosmologie />} />
          <Route path="/legi" element={<Legi />} />
          <Route path="/realizari" element={<Realizari />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>
)
