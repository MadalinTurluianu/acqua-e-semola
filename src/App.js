import MainPage from "./components/pages/MainPage";
import CookiePoliceBanner from "./components/features/cookies-police/CookiePoliceBanner";
import { useState } from "react";

function App() {
  const cookiesAlreadyChecked = localStorage.getItem("cookies-accepted");

  const [cookiesAllowed, setCookiesAllowed] = useState(
    cookiesAlreadyChecked === "yes"
  );
  const [cookiesBannerIsShown, setCookiesBannerIsShown] = useState(
    cookiesAlreadyChecked == null
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
            localStorage.setItem("cookies-accepted", "no");
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
