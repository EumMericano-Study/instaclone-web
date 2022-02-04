import { Container } from "components/elements";
import { isLoggedInVar } from "apollo";

function Home() {
    return (
        <Container>
            <h1>Home</h1>
            <button onClick={() => isLoggedInVar(false)}>Logout Now!</button>
        </Container>
    );
}

export default Home;
