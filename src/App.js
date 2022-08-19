import {
  Routes,
  Route,
} from "react-router-dom";

import Footer from './Components/Footer';
import Header from './Components/Header';
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import Main from './pages/Main';

import './styles/App.css';
import './styles/fonts.css';
import './styles/main.css';
import './styles/about.css';
import './styles/roadmap.css';
import './styles/media.css';
import HowBuy from "./pages/HowBuy";
import FAQ from "./pages/FAQ";



export const gitUrl = '/';

function App() {
  console.log('update-ok')  
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path={`${gitUrl}`} element={<Main />}  />
          <Route path={`${gitUrl}about`} element={<About />}  />
          <Route path={`${gitUrl}roadmap`} element={<Roadmap />}  />
          <Route path={`${gitUrl}how-to-buy`} element={<HowBuy />}  />
          <Route path={`${gitUrl}faq`} element={<FAQ />}  />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
