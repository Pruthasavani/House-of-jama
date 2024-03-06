import './App.css';
import { BrowserRouter, Route, Routes  } from "react-router-dom"
import Navbar from './componants/Navbar/Navbar';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import Collection from './componants/Collection/Collection';
import Men from './componants/Collection/Men';
import Women from './componants/Collection/Women';
import Kids from './componants/Collection/Kids';



function App() {
  return (
    <>

      <BrowserRouter>

        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
