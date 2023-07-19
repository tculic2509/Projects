import "./App.css";

import Contact from "./views/layout/contact";
import HomePage from "./views/layout/home";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const route = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />;
    <Route path="/contact" element={<Contact />} />
  </Route>
);
const router = createBrowserRouter(route);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
