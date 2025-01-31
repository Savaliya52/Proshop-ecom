
import {container} from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";


const App = () => {
  return (
    <>
    <Header />
    <main className='py-3'>
    <container>
          <Outlet />
    </container>
    </main>
    <Footer />
   </>  
  );
};
 
export default App;
