import { BrowserRouter,Routes,Route } from "react-router-dom";
import Counter from "./components/Counter";
import Countries from "./components/Countries";
import ListExample from "./components/ListExample";
import Converter from "./components/Converter";
import About from "./pages/About";
import Examples from "./pages/Examples";
import Home from "./pages/Home";
import { Clock } from "./components/Clock";



function App() {
    const examplesBase = "/examples";
    const examples =[
      {routeName:"list",compo:ListExample},
      {routeName:"countries",compo:Countries},
      {routeName:"counter",compo:Counter},
      {routeName:"degree-converter",compo:Converter},
      {routeName:"clock",compo:Clock},

    ]
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />
     <Route path={examplesBase} element={<Examples />} />
     <Route path="/about" element={<About />} />
    {
      examples.map(
        (example) =>(
          <Route path={example.routeName} element={<example.compo />} />
        )
      )
    }
     <Route path="*" element={<Home />} />
 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
