import Aside from "./common/Aside";
import Header from "./common/Header";
import StudentList from "./components/StudentList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import StudentInfo from "./components/StudentInfo";

function App() {
  return (
    <>
      <div>Hello</div>
      {/* <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>

        <Route path="/about" element={<About />} />

        <Route path="/studentinfo" element={<StudentInfo />} />
      </Routes> */}
    </>
  );
}

export default App;
