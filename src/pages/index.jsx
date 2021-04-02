// #region Imports

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/theme/refactor.scss';
import '../styles/pages/index.scss';

import NavBarComponent from '../components/layout/NavBar.component';
import DashboardComponent from '../components/layout/Dashboard';

// #endregion Imports

export default function Home() {
  return (
    <div className="home">
      <NavBarComponent></NavBarComponent>
      <div className="container">
        <DashboardComponent></DashboardComponent>
      </div>
    </div>
  );
}
