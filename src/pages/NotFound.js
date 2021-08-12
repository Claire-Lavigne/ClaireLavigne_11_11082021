import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.css";

class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to={"/"} className="link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    );
  }
}

export default NotFound;
