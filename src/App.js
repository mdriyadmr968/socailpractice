
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Post from "./Post/Post";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="post/:slug" element={<Post />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
