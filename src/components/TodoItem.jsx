import Complete from "./Complete";
import styles from "./todoitem.module.css";
import { useState } from "react";

export default function TodoItem({ item, todos, setToDos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(item.name);
  const [tempDate, setTempDate] = useState(item.date);

  function handleDelete(item) {
    console.log("Delete Button Clicked for Item", item.name);
    setToDos(todos.filter((todo) => todo !== item)); // Remove item by object reference
  }

  function handleClick(item) {
    setToDos(
      todos.map(
        (todo) => (todo === item ? { ...todo, done: !todo.done } : todo) // Use item reference to find the specific todo
      )
    );
  }

  function handleEditSubmit() {
    setToDos(
      todos.map(
        (todo) =>
          todo === item
            ? { ...todo, name: tempName, date: tempDate } // Update both name and date
            : todo // Use item reference to update the specific todo
      )
    );
    setIsEditing(false);
  }

  const completedCSSClass = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {isEditing ? (
          <>
            <input
              className={styles.editInput}
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
            />
            <input
              className={styles.editInput}
              type="date"
              value={tempDate}
              onChange={(e) => setTempDate(e.target.value)}
            />
            <button onClick={handleEditSubmit} className={styles.changeButton}>
              Change
            </button>
          </>
        ) : (
          <span
            className={completedCSSClass}
            onClick={() => handleClick(item)} // Pass the entire item to the handler
          >
            {item.name}
          </span>
        )}

        <button
          onClick={() => handleDelete(item)} // Remove the specific item
          className={styles.deleteButton}
        >
          x
        </button>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className={styles.editButton}
          >
            Edit
          </button>
        )}
      </div>
      {!item.done && (
        <div style={{ fontSize: "12px", fontWeight: "bold" }}>
          Have It Done By: <span className={styles.itemDate}>{item.date}</span>
        </div>
      )}
      <hr />
      {!item.done && <Complete />}
    </div>
  );
}
