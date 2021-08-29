import * as React from "react";
import { MainLayout } from "../layouts";
import * as s from "./home.module.css";
// markup
const IndexPage = () => {
  return (
    <MainLayout>
      <div className={s.bio}>
        <h1>Andrew Tio</h1>
        <div className={s.jobTitle}>Software Engineer</div>
      </div>
    </MainLayout>
  )
}

export default IndexPage
