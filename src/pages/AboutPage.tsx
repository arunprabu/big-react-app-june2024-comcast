import { useState } from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  const myStyles = { color: "black", backgroundColor: "lime" };
  const [myName, setMyName] = useState("arun");

  const handleTranslate= (targetLanguage: string) => {
    i18n.changeLanguage(targetLanguage);
  }

  return (
    <>
      <h1>{t("about.title")}</h1>
      <p>{t("about.subtitle")}</p>

      <button className="btn btn-primary" onClick={() => handleTranslate("fr")}>
        Translate to French
      </button>

      <button className="btn btn-primary" onClick={() => handleTranslate("en")}>
        Translate to English
      </button>

      <button className="btn btn-primary" onClick={() => handleTranslate("en-AU")}>
        Translate to Australian English
      </button>

      <p style={{ color: "red", backgroundColor: "yellow" }}>
        Demo of Inline Styles #1
      </p>

      <p style={{ color: "red", backgroundColor: "yellow" }}>
        Demo of Inline Styles #2
      </p>
      {/* NOTE: NEVER EVER WRITE INLINE STYLES IN LISTS & KEYS */}
      {/* The issue is -- you will end up having code duplicates -- Solution is to go for internal styles */}

      <p style={myStyles}>Demo of Internal Styles</p>
      <p style={myStyles}>You can reuse this....</p>

      {/* Controlled Component Example */}
      <input
        type="text"
        className="form-control"
        value={myName}
        onChange={(event) => setMyName(event.target.value)}
      />
    </>
  );
};

export default AboutPage;
