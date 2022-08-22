import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Adduser from "./components/Adduser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user/add" element={<Adduser />}></Route>
          <Route path="user/edit/:id" element={<EditUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
