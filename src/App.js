import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Employees from "./pages/Employees";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <Navbar />
        <Route exact path='/' component={About} />
        <Route exact path='/employees' component={Employees} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
