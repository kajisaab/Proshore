import "./App.css";
import Home from "./Home";
import Repos from "./Repos";
import RepoDetails from "./RepoDetails";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/:name/repos" element={<Repos />} />
          <Route
            path="users/:name/repos/repository/:name"
            element={<RepoDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
