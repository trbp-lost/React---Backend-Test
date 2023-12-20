import "./App.css";
import HomePage from "./pages/HomePage";
import DataMahasiswaPage from "./pages/DataMahasiswaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data_mhs" element={<DataMahasiswaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
