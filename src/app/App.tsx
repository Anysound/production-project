import { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { AboutPageAsync } from "pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "pages/MainPage/MainPage.async";
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames(`app`, {hovered: true, selected: false}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
