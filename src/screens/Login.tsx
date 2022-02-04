import Container from "components/elements/Container";
import { isLoggedInVar, isDarkModeVar } from "apollo";

function Login() {
    return (
        <Container>
            <h1>Login</h1>
            <button onClick={() => isLoggedInVar(true)}>Login Now!</button>
            <br />
            <button onClick={() => isDarkModeVar(false)}>Light Mode</button>
            <button onClick={() => isDarkModeVar(true)}>Dark Mode</button>
        </Container>
    );
}

export default Login;
