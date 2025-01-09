// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import Header from "./Components/Header";
import CoreContents1 from "./Components/CoreContents1";
import CoreContents2 from "./Components/CoreContents2";
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started! Gaurav</h2>
      </main>
      {/* <CoreContents1 /> */}
      <br />
      <CoreContents2 />
    </div>
  );
}

export default App;
