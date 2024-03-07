import Container from "./components/Container/Container";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`d-flex justify-content-center ${styles.app}`}>
      <Container />
    </div>
  );
}

export default App;
