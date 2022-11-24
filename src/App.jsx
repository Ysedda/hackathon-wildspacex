import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={"Not Found"} />
      </Routes>
    </div>
  );
}

export default App;
