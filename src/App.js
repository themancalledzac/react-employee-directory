import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Employees from "./pages/Employees";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={About} />
        <Route exact path='/employees' component={Employees} />
      </div>
    </Router>
  );
}

export default App;
