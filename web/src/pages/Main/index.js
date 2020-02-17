import React, { useState } from "react";

import Navbar from "../../components/Navbar";
import Dashboard from "../../components/Dashboard";
import './styles.css';

export function Main(props) {

  return (
    <div id="page-main">
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default Main;