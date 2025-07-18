import styles from "./Home.module.css";

function Home() {
  const heroImg = 'https://images.unsplash.com/photo-1625214214702-e2d227cfa495?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <div className={styles.container}>
      <img className={styles.heroImg} src={heroImg}/>
      <p className={styles.welcomeText}>Welcome to my store!</p>
    </div>
  )
}

export default Home