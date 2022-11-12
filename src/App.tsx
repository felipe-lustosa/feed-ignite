import { useState } from "react";

import "./global.css";
import styles from "./App.module.css";

import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {
  return (
    <h1>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Post />
        </main>
      </div>
    </h1>
  );
}
