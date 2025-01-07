// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)
import { App1 } from "./App1";
import { App2 } from "./App2";
import reactImage from "./assets/react-core-concepts.png";
export function Header() {
  const reactDescriptions = ["Fundamental", "Cruicial", "Core"];
  function getRandom(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandom(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started! Gaurav</h2>
      </main>
      <App1 />
      <br />
      <App2 />
    </div>
  );
}

export default App;
