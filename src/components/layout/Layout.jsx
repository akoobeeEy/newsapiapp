import { Component, Fragment } from "react";
import { Footer, Header } from "../index";
import { Outlet } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container mx-auto">
          <Outlet />
        </div>
        <footer>
          
        <Footer />
        </footer>
        </>
    );
  }
}

export default Layout;
