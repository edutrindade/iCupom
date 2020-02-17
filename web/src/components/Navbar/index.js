import React, { useState } from "react";
import Profile from "../../assets/Profile.png";
import Logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom';
import { FaRegChartBar, FaClipboardList, FaSign,FaRegAddressCard,
FaRegHandshake, FaRegUser, FaProductHunt, FaBalanceScale, FaBook } from 'react-icons/fa';

import Dashboard from "../../components/Dashboard";
import './styles.css';

export function Navbar(props) {

  return (
    <div id="page-main">
      <div className="vertical-nav bg-white" id="sidebar">
      <div className="py-4 px-3 mb-4 bg-light">
        <div className="media d-flex align-items-center">
          <img src={Profile} alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
          <div className="media-body">
            <h6 className="m-0">Eduardo Trindade</h6>
            <p className="font-weight-light text-muted mb-0">CEO iCupom</p>
          </div>
        </div>
      </div>

  <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Menu</p>

  <ul className="nav flex-column bg-white mb-0">
    <li className="nav-item">
      <a href="/main" className="nav-link text-dark bg-light" >
        <i className="fa fa-th-large mr-3 text-success fa-fw">
        <FaRegChartBar /></i>
          Dashboard
      </a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle text-dark" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-address-card mr-3 text-success fa-fw">
        <FaClipboardList /></i>
        Cadastros
      </a>
      <div className="dropdown-menu">
        <a href="/categories" className="dropdown-item">
          <div className="icon-subnav">
            <FaSign />
          </div> Categorias
        </a>
        <a className="dropdown-item" href="#">
          <div className="icon-subnav">
            <FaRegAddressCard />
          </div> Clientes
        </a>
        <a className="dropdown-item" href="#">
          <div className="icon-subnav">
            <FaRegHandshake />
          </div> Contratos</a>
        <a className="dropdown-item" href="#">
          <div className="icon-subnav">
            <FaProductHunt />
          </div> Pacotes
        </a>
        <a className="dropdown-item" href="#">
          <div className="icon-subnav">
            <FaRegUser />
          </div> Usuários                                
        </a>
    </div>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link text-dark">
          <i className="fa fa-cubes mr-3 text-success fa-fw">
            <FaBalanceScale />
          </i>
          Financeiro
      </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link text-dark">
          <i className="fa fa-picture-o mr-3 text-success fa-fw">
            <FaBook />
          </i>
          Relatórios
      </a>
    </li>
  </ul>
  <div className="footer-vertical-nav">
    <img src={Logo} />
  </div>
</div>
  
    </div>
  )
}

export default Navbar;