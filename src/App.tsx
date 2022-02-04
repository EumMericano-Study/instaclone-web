import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar, isDarkModeVar } from "apollo";
import Home from "screens/Home";
import Login from "screens/Login";
import NotFound from "screens/NotFound";

function App() {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    const isDarkMode = useReactiveVar(isDarkModeVar);

    return (
        <Router>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
