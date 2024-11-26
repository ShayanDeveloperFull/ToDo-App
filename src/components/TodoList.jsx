import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setToDos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item, idx) => (
        <TodoItem key={idx} item={item} todos={todos} setToDos={setToDos} />
      ))}
    </div>
  );
}
