import styles from "./todolist.module.css";

export default function Complete() {
  return (
    <p className={styles.completeTip}>Click On Your ToDo To Mark As Complete</p>
  );
}
