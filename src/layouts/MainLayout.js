import React from "react";
import { Header, Footer } from "../components";
import "./reset.css";
import "./mainLayout.css";

function MainLayout({ children }) {
  return (
    <main className="main">
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default MainLayout;
