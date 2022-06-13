import { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import './App.css';
import axios from "axios";
import PostPage from "./components/postPage/PostPage.js"
import Home from "./components/Home.js"

axios.defaults.baseURL = "https://dummyjson.com";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchText: '',
      completedSearchQuery: '',
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchTextChange(event) {
    this.setState({searchText: event.target.value});
    if (event.target.value.length === 0) {
      this.setState({completedSearchQuery: '',});
    }
  }

  handleSubmit(event) {
    this.setState({completedSearchQuery: this.state.searchText});
    event.preventDefault();
  }

  render() {

    return (
      <Router>
        <div>
          <header>
            <div className="header content">
              <div className="nav">
                <NavLink to="/">Home</NavLink>
              </div>
              <div className="search">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Search" value={this.state.searchText} onChange={this.handleSearchTextChange} />
                  <button type="submit" onClick={this.addItem} >Find</button>
                </form>
              </div>
            </div>
          </header>

          <Routes>
            <Route  path="/" element={<Home completedSearchQuery={this.state.completedSearchQuery}/>} />
            <Route  path=":id" element={<PostPage/>} />
          </Routes>

        </div>
      </Router>
    );
  }
}

export default App;

