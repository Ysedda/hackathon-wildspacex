import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={"un truc"} />
        <Route path="/travel" element={""} />
        <Route path="*" element={"Not Found"} />
      </Routes>
    </div>
  );
}

export default App;
