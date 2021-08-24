import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./notfound.module.css";

class NotFound extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className={`d-flex flex-col text-center ${styles.notFound}`}>
          <h1 className={styles.notFoundTitle}>404</h1>
          <h2 className={styles.notFoundSubtitle}>
            Oups! La page que vous demandez n'existe pas.
          </h2>

          <Link className={styles.notFoundLink} to={"/"}>
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
