import Aside from "./common/Aside";
import Header from "./common/Header";
import StudentList from "./components/StudentList";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Aside />
      </div>
      <div>
        <StudentList />
      </div>
    </>
  );
}

export default App;
