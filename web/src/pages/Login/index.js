import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom'
import Spinner from "react-activity/lib/Dots";
import { FaUserAlt, FaUnlockAlt } from 'react-icons/fa';

import './styles.css';

export function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Unautorized, setUnautorized] = useState(false);
  const [requiredField, setRequiredField] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    props.history.push("/main");
  }

  return (
    <div id="page-login">
      <div className="login-content-form">
        <div className="login-logo">
          <div className="logo-size">
            <img src={Logo} alt="logo"></img>
          </div>
        </div>

        <form className="login-form">

          <div className="input-container">
            <div className="login-username" data-validate = "Informe seu usuário">
              <input className="input-username-password" type="text" name="username" placeholder="Usuário" />
              <span className="focus-username" data-placeholder="&#xf207;"></span>
            </div>
          </div>

					<div className="login-password" data-validate="Informe sua senha">
            <input className="input-username-password" type="password" name="password" placeholder="Senha" />
            <span className="focus-password" data-placeholder="&#xf191;"></span>
					</div>

          <div className="login-btn-access">
            <button type="button" className="btn btn-success" id="btn-access" onClick={handleSignIn}>
            {!loading ? (
              "Acessar"
            ) : (
              <Spinner color="#727981" size={44} speed={1} animating={true} />
            )}
            </button>
          </div>

          <div className="login-recovery-access">
            <Link to="recovery">
              Esqueceu sua senha?
            </Link>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default Login;