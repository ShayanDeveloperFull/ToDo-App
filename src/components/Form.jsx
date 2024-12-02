import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setToDos }) {
  const [todo, setToDo] = useState({ name: "", done: false, date: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setToDos([...todos, todo]);
    setToDo({ name: "", done: false, date: "" });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setToDo({ ...todo, name: e.target.value })}
          type="text"
          value={todo.name}
          placeholder="Enter Todo Item..."
        />
        <input
          className={styles.dateInput}
          onChange={(e) => setToDo({ ...todo, date: e.target.value })}
          type="date"
          value={todo.date}
          style={{ color: todo.date ? "black" : "white" }}
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
