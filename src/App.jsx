import styles from "./App.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Header from './components/Header/Header';

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <Header cartCount={cartCount} />
      <div className={styles.container}>
        <Outlet context={{ setCartCount }} />
      </div>
    </>
  )
}

export default App
