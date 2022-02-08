import { Container, CenterAlign } from "components/elements";

import { TopBox, BottomBox, Title } from "./Login.styles";

function Login() {
  return (
    <Container>
      <CenterAlign>
        <TopBox>
          <h1>Instagram</h1>
          <form>
            <input type="text" placeholder="아이디, 이메일" />
            <input type="password" placeholder="비밀번호" />
            <input type="submit" placeholder="로그인" />
          </form>
          <span>또는</span>
          <span>페이스북으로 로그인 하기</span>
        </TopBox>
        <BottomBox>
          <span>아직 회원가입을 하지 않으셨나요?</span>
          <a href="#">Sign up</a>
        </BottomBox>
      </CenterAlign>
    </Container>
  );
}

export default Login;
