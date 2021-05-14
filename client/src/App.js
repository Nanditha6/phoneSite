import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from 'jquery';
import Navbar from "./components/common/Navbar/Navbar";
import { MENU_ITEMS } from "./components/Constants";
import List from "./components/Pages/List/List";

function App() {
    return (
    <>
        <Router>
            <Switch>
                <Route path="/list" component={List} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </>
    );
}

export default App;
