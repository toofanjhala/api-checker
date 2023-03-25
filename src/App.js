import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./component/pages/Home";
import { ShowData } from "./component/pages/showdata";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showdata" element={<ShowData />} />
      </Routes>
    </Router>
  );
}

export default App;
