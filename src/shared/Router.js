import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Post from "../pages/Post";

const Router = ({ login, logout, userId }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home logout={logout} />} userId={userId} />
        <Route path="post" element={<Post />} />
        <Route path="login" element={<Login login={login} />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
