
import './App.css';
import HomeWorld from './Pages/HomeWorld.js';
import MyProjects from './Pages/My Projects/My-Projects';
import ProjectPH from './Pages/ProjectPH/ProjectPH';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeWorld />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/ProjectPH/:id" element={<ProjectPH />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
