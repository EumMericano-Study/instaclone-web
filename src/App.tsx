import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar, isDarkModeVar } from "apollo";
import Home from "screens/Home";
import Login from "screens/Auth/Login";
import NotFound from "screens/NotFound";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isDarkMode = useReactiveVar(isDarkModeVar);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
