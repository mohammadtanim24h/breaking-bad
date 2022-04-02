import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import About from "./components/About/About";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/characters" element={<Characters></Characters>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
        </div>
    );
}

export default App;
