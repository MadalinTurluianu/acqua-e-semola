import MainPage from "./components/pages/MainPage";
import CookiePoliceBanner from "./components/features/cookies-police/CookiePoliceBanner";
import { useState } from "react";

function App() {
  const [cookiesAllowed, setCookiesAllowed] = useState(false);
  const [cookiesBannerIsShown, setCookiesBannerIsShown] = useState(
    localStorage.getItem("cookies-accepted") === "yes" ? false : true
  );

  return (
    <>
      {cookiesBannerIsShown && (
        <CookiePoliceBanner
          onAccept={() => {
            setCookiesAllowed(true);
            setCookiesBannerIsShown(false);
            localStorage.setItem("cookies-accepted", "yes");
          }}
          onReject={() => {
            setCookiesAllowed(false);
            setCookiesBannerIsShown(false);
          }}
        />
      )}
      <MainPage
        cookiesAllowed={cookiesAllowed}
        onCheckCookies={() => {
          setCookiesBannerIsShown(true);
        }}
      />
    </>
  );
}

export default App;
