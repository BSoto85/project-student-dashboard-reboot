import Aside from "./common/Aside";
import Header from "./common/Header";
import StudentList from "./components/StudentList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
    <Routes>
      <Route></Route>
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
