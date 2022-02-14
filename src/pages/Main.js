import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SplashLogoImg from "../assets/splash-logo.png";
import ContentLogoImg from "../assets/content-logo.png";

import Header from "../components/Header";
const Main = () => {
  const [seconds, setSeconds] = useState(2);

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
      <MainPage>
        <Header />
        <SideBar>
          <SideContent>08. 신촌01 투어센터 운영 수칙 </SideContent>
          <SideContent>07. 신촌01 스터디카페 운영 수칙 </SideContent>
          <SideContent>06. 신촌01 헬스클럽 운영 수칙 </SideContent>
          <SideContent>05. 신촌49 댄스연습실 운영 수칙 </SideContent>
          <SideContent>04. 신촌49 홀덤펍 운영 수칙 </SideContent>
          <SideContent>03. 신촌31 음악연습실 운영 수칙 </SideContent>
          <SideContent>02. 신촌101 코워킹 운영 수칙 </SideContent>
          <SideContent>01. 신촌72 개인방송국 운영 수칙 </SideContent>
          <SideContent>03. 신촌31 음악연습실 운영 수칙 </SideContent>
          <SideContent>02. 신촌101 코워킹 운영 수칙 </SideContent>
          <SideContent>01. 신촌72 개인방송국 운영 수칙 </SideContent>
          <SideContent>
            00. 신촌00 제목이 두줄일때 두 줄 일때 두줄일때
          </SideContent>
          <SideContent>
            00. 신촌00 제목이 세줄일때 세줄 일때 세줄일때 세줄일때 세줄일때
          </SideContent>
        </SideBar>
        <MainContents>
          <ContentLogo />
        </MainContents>
      </MainPage>
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
  position: fixed;
  top: 0;
  z-index: 100;
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

const SideBar = styled.div`
  width: 300px;
  height: calc(100% - 80px);
  background-color: #f4f4f4;
  overflow: scroll;
  position: fixed;
  top: 80px;
`;

const MainContents = styled.div`
  width: calc(100% - 300px);
  height: calc(100% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  position: fixed;
  right: 0;
  top: 80px;
`;

const ContentLogo = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${ContentLogoImg});
  background-repeat: no-repeat;
  background-position: center;
`;

const SideContent = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  padding: 22px 40px 19px 16px;
  margin: 0 auto;
  color: #666;
  font-size: 16px;
  word-wrap: break-word;
  border-bottom: 0.5px solid #666;
`;
export default Main;
