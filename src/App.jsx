import "./App.css";
import Auth from "./pages/Auth";
import { Routes, Route  } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/" element={<Homepage/>}/>
      {/* <Route path="*" element={}/> */}
    </Routes>
    </>
    )
}

export default App;
