import { useState } from "react";
import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  const [flashCompleted, setFlashCompleted] = useState(false);
  const [flashTotal, setFlashTotal] = useState(false);
  const [prevCompletedTodos, setPrevCompletedTodos] = useState(completedTodos);
  const [prevTotalTodos, setPrevTotalTodos] = useState(totalTodos);

  const playSound = () => {
    const sound = new Audio("/completedSound.mp3");
    sound.play();
  };

  if (completedTodos !== prevCompletedTodos) {
    if (completedTodos > prevCompletedTodos) {
      setFlashCompleted(true);
      playSound();
      setTimeout(() => setFlashCompleted(false), 1000);
    }
    setPrevCompletedTodos(completedTodos);
  }

  if (totalTodos !== prevTotalTodos) {
    setFlashTotal(true);
    setTimeout(() => setFlashTotal(false), 1000);
    setPrevTotalTodos(totalTodos);
  }

  const flashClassCompleted = `${styles.item} ${
    flashCompleted ? styles.flash : ""
  }`;
  const flashClassTotal = `${styles.item} ${flashTotal ? styles.flash : ""}`;

  return (
    <div className={styles.footer}>
      <span className={flashClassCompleted}>
        Completed Todos: {completedTodos}
      </span>
      <span className={flashClassTotal}>Total Todos: {totalTodos}</span>
    </div>
  );
}
