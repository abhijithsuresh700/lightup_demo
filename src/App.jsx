import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import { useSelector } from "react-redux";

function App() {
  const { isLoggedIn } = useSelector((state) => state.login);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <RootLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
