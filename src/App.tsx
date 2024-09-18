import './App.css';
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Labs from "./Labs" //index.tsx is implied

function App() {
  return (
    <HashRouter>
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Kanbas"/>}/>
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
    
  );
}

export default App;