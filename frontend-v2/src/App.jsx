import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import GlobalStyles from "./styles/GlobalSTyles.js";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="Home" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Home></Home>
    </>
  );
}

export default App;
