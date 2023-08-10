import "./App.css";

import Contact from "./views/layout/contact";
import HomePage from "./views/layout/home";
import Jahta from "./views/layout/jacht";
import VinskaKarta from "./views/layout/vinskaKarta";
import DistribucijaPica from "./views/layout/distribucijaPica";
import Privatnost from "./views/layout/privatnost";
import Impresum from "./views/layout/impresum";
import Uvjeti from "./views/layout/uvjeti";
import NavBar from "./components/navbar/navbar";
import About from "./views/layout/oNama";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const route = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />;
    <Route path="/jacht" element={<Jahta />} />
    <Route path="/distribution" element={<DistribucijaPica />} />
    <Route path="/vineCard" element={<VinskaKarta />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privatnost" element={<Privatnost />} />
    <Route path="/impresum" element={<Impresum />} />
    <Route path="/uvjeti" element={<Uvjeti />} />
    <Route path="/navbar" element={<NavBar />} /> 
    <Route path="/about" element={<About />} /> 
  </Route>
);
const router = createBrowserRouter(route);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
