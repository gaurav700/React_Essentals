// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

function App() {
  const reactDescriptions = ["Fundamental", "Cruicial", "Core"];
  function getRandom(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  return (
    <div>
      <header>
        <img src="assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[getRandom(2)]} React concepts you will need for
          almost any app you are going to build!
        </p>
      </header>

      <main>
        <h2>Time to get started! Gaurav</h2>
      </main>
    </div>
  );
}

export default App;
