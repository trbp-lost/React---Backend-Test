import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DataMahasiswaPage from "./pages/DataMahasiswaPage";
import TambahDataPage from "./pages/TambahDataPage";
import EditDataPage from "./pages/EditDataPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data_kost" element={<DataMahasiswaPage />} />
        <Route path="/tambah_data" element={<TambahDataPage />} />
        <Route path="/edit_data/:id" element={<EditDataPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
