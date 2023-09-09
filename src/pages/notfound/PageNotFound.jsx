import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PageNotFound extends Component {
  render() {
    return (
      <div className="w-full ">
        <Link to="/" className="ms-32">Home</Link>
        <div className="flex flex-col items-center">
          <p className="mb-10 text-4xl font-bold">404 Error</p>
          <p className="text-4xl font-bold">Page Not Found </p>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
