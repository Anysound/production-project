import { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
// абсолютные импорты
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "./providers/router";

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames(`app`, {hovered: true, selected: false}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter/>
    </div>
  );
};
