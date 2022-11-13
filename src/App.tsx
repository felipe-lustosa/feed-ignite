import { useState } from "react";

import "./global.css";
import styles from "./App.module.css";

import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/felipe-lustosa.png",
      name: "Felipe Lustosa",
      role: "Web developer",
    },
    publishedAt: new Date("2022-11-12 20:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    publishedAt: new Date("2022-11-12 22:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
];

export function App() {
  return (
    <h1>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          {posts.map((post) => {
            return <Post key={post.id} author={post.author} publishedAt={post.publishedAt} content={post.content} />;
          })}
        </main>
      </div>
    </h1>
  );
}
