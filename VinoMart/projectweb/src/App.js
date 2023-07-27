import "./App.css";

import Contact from "./views/layout/contact";
import HomePage from "./views/layout/home";
import Jahta from "./views/layout/jacht";
import VinskaKarta from "./views/layout/vinskaKarta";
import DistribucijaPica from "./views/layout/distribucijaPica";

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
  </Route>
);
const router = createBrowserRouter(route);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
