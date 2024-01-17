import Aside from "./common/Aside";
import Header from "./common/Header";
import StudentList from "./components/StudentList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";


function App() {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<Home />}> </Route>

      <Route path="/about" element={<About />}></Route>

      <Route path="/studentInfo" element={<StudentInfo />}></Route>

      <div>
        <Home />
      </div>
      
      <div>
        <StudentList />
      </div>
      </Routes>
    </>
  );
}

export default App;
