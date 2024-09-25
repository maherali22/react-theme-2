import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Men from "./page/Men";
import Women from "./page/Women";
import Collection from "./page/Collection";
import Lookbook from "./page/Lookbook";
import Sale from "./page/Sale";
import Contact from "./page/Contact";
import Cart from "./page/Cart";
import User from "./page/User";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
