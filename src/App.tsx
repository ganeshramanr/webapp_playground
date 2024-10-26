import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import ProtectedRoutes from "./ProtectedRoutes";
import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
import MainPage from "./pages/MainPage";
import FinnhubPage from "./pages/FinnhubPage";
import OAuthIntegrations from "./pages/OAuthIntegrations";
import GoogleDetailsPage from "./pages/GoogleDetailsPage";
import TwitterDetailsPage from "./pages/TwitterDetailsPage";
import OpenAIPage from "./pages/OpenAIPage";
import HomePage from "./pages/HomePage";
import GeminiAIPage from "./pages/GeminiAIPage";
// import { AuthContext } from "./AuthContext";
// import { useState } from "react";

function App() {
  // const [user, setUser] = useState("");
  return (
    <BrowserRouter>
    {/* <AuthContext.Provider value={[user, setUser]}> */}
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<ProtectedRoutes />} >
              <Route element={<MainPage />}>
                <Route path="/integrations" element={<OAuthIntegrations />} />
                <Route path="/openai" element={<OpenAIPage />} />
                <Route path="/geminiai" element={<GeminiAIPage />} />
                <Route path="/finnhub" element={<FinnhubPage />} />
                <Route path="/google" element={<GoogleDetailsPage />} />
                <Route path="/twitter" element={<TwitterDetailsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<HomePage />} />
              </Route>
            </Route>
        </Routes>
      {/* </AuthContext.Provider> */}
    </BrowserRouter>
  )
}

export default App
