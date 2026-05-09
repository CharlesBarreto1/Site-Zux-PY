import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ControlParental from "./pages/ControlParental";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/control-parental" element={<ControlParental />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
