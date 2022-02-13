import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SplashLogoImg from "../assets/splash-logo.png";
const Main = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <Page>
      {seconds === 0 ? null : (
        <Splash>
          <SplashLogo />
        </Splash>
      )}
      <MainPage>adsads</MainPage>
    </Page>
  );
};

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: none;
`;

const Splash = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffaf26;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const SplashLogo = styled.div`
  width: 135px;
  height: 135px;
  background-image: url(${SplashLogoImg});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainPage = styled.div`
  width: 100%;
  height: 100%;
`;

export default Main;
