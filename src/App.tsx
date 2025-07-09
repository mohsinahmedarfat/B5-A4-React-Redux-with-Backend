import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="p-10">
      <div className="mb-10"><Navbar/></div>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
