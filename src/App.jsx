
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Register from "./components/Register";


function App() {

  return (
    <div className="w-full h-full m-0 p-0 bg-yellow-500 relative">
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
