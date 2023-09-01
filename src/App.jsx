import "./scss/app.scss";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Home />
      </div>
    </>
  );
}

export default App;
