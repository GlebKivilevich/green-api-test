import "./App.css";
import Auth from "./pages/Auth";
import Homepage from "./pages/Homepage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  function checkAuthCookie() {
    const authCookie = document.cookie.split(";");
    let obj = {};

    authCookie.forEach((el) => {
      let item = el.trim().split("=");
      obj[item[0]] = `${item[1]}`;
    });

    if (!obj.idInstance && !obj.apiTokenInstance) {
      navigate("/auth");
    } else {
      navigate("/home");
    }
  }

  useEffect(() => {
    checkAuthCookie();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="*" element={}/> */}
      </Routes>
    </>
  );
}

export default App;
