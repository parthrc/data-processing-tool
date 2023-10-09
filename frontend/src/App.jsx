import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { UserProvider } from "./Context/UserContext";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import ResetPassPage from "./Pages/ResetPassPage/ResetPassPage";
import { FileProvider } from "./Context/FileContext";

function App() {
  return (
    <FileProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="reset" element={<ResetPassPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </FileProvider>
  );
}

export default App;
