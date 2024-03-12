import { Dispatch, SetStateAction, useState } from "react";
import Container from "./components/Container/Container";
import styles from "./App.module.scss";

function App() {
  const [isDarkMode, setIsDarkMode]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  return (
    <div
      className={`d-flex justify-content-center ${
        isDarkMode ? "dark-mode" : "light-mode"
      } ${styles.app}`}
    >
      <Container setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
