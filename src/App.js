import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Employees from "./pages/Employees";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path='/' component={About} />
        <Route exact path='/employees' component={Employees} />
        <Footer />
      </>
    </Router>
  );
}

export default App;
