import "./App.css";
import { useState } from "react";
import { RouterPath } from "./routes/RouterPath";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, Sidenav } from "./components";

function App() {
  const [showSidenav, setShowSidenav] = useState(false);
  const toggleSidenav = () => setShowSidenav((prev) => !prev);
  return (
    <div className="App ">
      <Header toggleSidenav={toggleSidenav} />
      <div className="main-container">
        <Sidenav showSidenav={showSidenav} toggleSidenav={toggleSidenav} />
        <div className="components-div">
          <RouterPath />
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
