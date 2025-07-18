import styles from "./App.module.css";
import { Link, Outlet } from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  )
}

export default App
