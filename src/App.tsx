/* component can have 
  1. TS 
  2. JSX 
  3. CSS (optional)
*/
import "./App.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import MainRoutes from "./routes/MainRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";
import enAuTranslation from "./locales/en-AU/translation.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    supportedLngs: ["fr", "en", "en-AU"],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      "en-AU": { translation: enAuTranslation },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Header></Header>

          <main className="container mt-5 pt-2">
            <MainRoutes />
          </main>
        </CartProvider>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
