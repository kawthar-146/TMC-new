import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Header/index";
import { Routes, Route } from "react-router-dom";
import LandingPageLayout from "./layouts/LandingPage";
import HomePage from "./Pages/HomePage";
import Services from "./Pages/Services/Services";
import Products from "./Pages/Products/Products";
import Project from "./Pages/Projects/Project";
import Contact from "./Pages/Contact/Contact";
import Distributor from "./Pages/Distributer/Distributor";
import Events from "./Pages/Events/Events";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPageLayout><HomePage/></LandingPageLayout>}
        ></Route>
         <Route
          exact
          path="/about"
          element={<HomePage/>}
        ></Route>
         <Route
          exact
          path="/services"
          element={<Services/>}
        ></Route>
         <Route
          exact
          path="/products"
          element={<Products/>}
        ></Route>
         <Route
          exact
          path="/warehouses"
          element={<Project/>}
        ></Route>
           <Route
          exact
          path="/contact"
          element={<Contact/>}
        ></Route>
          <Route
          exact
          path="/distributor"
          element={<Distributor/>}
        ></Route>
         <Route
          exact
          path="/events"
          element={<Events/>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
