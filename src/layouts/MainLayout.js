import React from "react";
import { Header, Footer } from "../components";
import * as reset from "./reset.module.css";
import * as s from "./mainLayout.module.css";

function MainLayout({ children }) {
  return (
    <main className={s.main}>
      <Header />
      <div className={s.container}>
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default MainLayout;
