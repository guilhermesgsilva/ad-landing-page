import "./App.scss";

import Home from "./pages/home/Home.js";

import NavBar from "./components/navBar/NavBar.js";

/* https://dev.to/madza/15-useful-placeholder-tools-for-designers-and-developers-4m7n */
/* https://picsum.photos/ */

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
