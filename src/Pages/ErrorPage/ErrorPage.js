import React from "react";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="cryptoNews">
      <div className="display">
        <h1>404</h1>
        <p>The page you are looking for is not available.</p>
        <Link className="linkbutton" to="/">
          home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
