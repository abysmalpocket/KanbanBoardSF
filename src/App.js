import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import data from "./mock.json";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('kanbandata')) || data);

  useEffect(() => {
    localStorage.setItem('kanbandata', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </div>
    </BrowserRouter>
  );
}

export default App;
