import "./App.css";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./pages/Login";
import { Link, Route, Router, Routes } from "react-router-dom";
import HomeClient from "./pages/HomeClient";
import { HomeAdmin } from "./pages/HomeAdmin";
import { ErrorPage } from "./pages/Error";
import { Button } from "react-bootstrap";
import { RequireAuth } from "./context/auth/RequireAuth";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeClient />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <HomeAdmin />
            </RequireAuth>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
