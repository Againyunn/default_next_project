import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

// redux connect
import { useSelector } from "react-redux";

// bootstrap
import { Button } from "react-bootstrap";

// component
import LoginedUser from "@/components/login/LoginedUser";
import Likes from "@/components/likes/Likes";

function MainPage() {
  const router = useRouter();

  let thisLoginedUser = useSelector((state) => {
    // console.log("state.user", state.user);
    return state.user.thisUser;
  });

  return (
    <MainWrapper>
      <LoginWrap>
        <LoginedUser />
      </LoginWrap>
      <Likes />
      <br />
      {!thisLoginedUser ? (
        <LoginButton onClick={() => router.push("/Login")}>LogIn</LoginButton>
      ) : (
        <></>
      )}
    </MainWrapper>
  );
}

export default MainPage;

/** styled-component*/
const MainWrapper = styled.div`
  display: flex;
  height: calc(100vh - 400px);
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const LoginWrap = styled.div`
  margin: 20px;
  text-align: center;
`;
const LoginButton = styled(Button)`
  background-color: #13c7a3;
  border: 0px;

  &:hover {
    background-color: #13c7a3 !important;
    filter: brightness(95%);
    box-shadow: 0px 0px 5px 1px #13c7a3;
  }
`;
