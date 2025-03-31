

import { Provider } from "react-redux";
import Erro404 from "containers/errors/Error404";
import Home from "containers/pages/home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import store from "store";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import Carreras from "containers/pages/Carreras";
import About from "containers/pages/About";
import Blog from "containers/pages/Blog";
import Contacto from "containers/pages/Contacto";


function App() {
  return (
    <Provider store={store} >

   
      <Router>
        <Routes> 

          <Route path="*" element={<Erro404/>} />

          <Route path="/" element={<Home/>} />
          <Route path="/casos" element={<Cases/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/carreras" element={<Carreras/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contacto" element={<Contacto/>} />

        </Routes> 
      </Router>

    </Provider>
  );
}

export default App;
