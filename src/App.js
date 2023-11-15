import React, { useCallback, useEffect, useState } from "react";
import Router from "./shared/Router";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./styles/theme";
import { useSelector } from "react-redux";

const App = () => {
  const [themeMode, setThemeMode] = useState("LightMode");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(false);
  const [tokenExpirationTime, setTokenExpirationTime] = useState();

  const user = useSelector((state) => state);

  const login = useCallback((userId, token, tokenExpirationTime) => {
    setToken(token);
    setUserId(userId);
    const tokenExpiration =
      tokenExpirationTime || new Date(new Date().getTime() + 60 * 1000 * 60);
    setTokenExpirationTime(tokenExpiration);

    localStorage.setItem(
      "user",
      JSON.stringify({
        userId,
        token,
        expiration: tokenExpiration.toISOString(),
      })
    );
  }, []);

  useEffect(() => {
    const currentUserData = JSON.parse(localStorage.getItem("user"));
    if (currentUserData && new Date(currentUserData.expiration) > new Date()) {
      login(
        currentUserData.userId,
        currentUserData.token,
        new Date(currentUserData.expiration)
      );
    }
  }, [login]);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setTokenExpirationTime(null);
    localStorage.removeItem("user");
    alert("로그아웃되었습니다.");
  }, []);

  // get 요청시
  useEffect(() => {
    let logoutTimer;
    if (token && tokenExpirationTime) {
      const remainingTime =
        tokenExpirationTime.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
    return () => {
      clearTimeout(logoutTimer);
    };
  }, [token, tokenExpirationTime, logout]);

  return (
    <ThemeProvider theme={themeMode ? LightTheme : DarkTheme}>
      <Router login={login} logout={logout} userId={userId} />
    </ThemeProvider>
  );
};

export default App;
