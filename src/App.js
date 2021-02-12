import React from "react";
import Tours from "./Tours";
import Cocktails from "./Cocktails";
import DarkMode from "./DarkMode";
import Quiz from "./Quiz";
import TodoList from "./TodoList";
import Hacker from "./HackerNews";

function App() {
  return (
    <main>
      <header className="hero">
        <h1>My Portfolio!..</h1>
      </header>
      <section className="section">
        <div className="section-title">
          <h2>My Work</h2>
          <div class="underline"></div>
        </div>
        <div className="section-center">
          <Tours />
          <Cocktails />
          <DarkMode />
          <Quiz />
          <TodoList />
          <Hacker />
        </div>
      </section>
      <h1 className="hero">More still in progress</h1>
    </main>
  );
}

export default App;
