import './scss/app.scss'
import Home from "./pages/Home";
import Index from "./components/Header";

function App() {
  return (
    <>
        <Index />
        <div className="wrapper">
            <Home/>
        </div>
    </>

  );
}

export default App;
