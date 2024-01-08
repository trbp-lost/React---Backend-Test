import React, { useState } from "react";
import axios from "axios";
import Notification from "./Notification";

function FormTambahData() {
  const [nokamar, setNpm] = useState("");
  const [penghuni, setNama] = useState("");
  const [harga, setKelas] = useState("");
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);

  const saveMahasiswa = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nokamar", nokamar);
    formData.append("penghuni", penghuni);
    formData.append("harga", harga);

    try {
      await axios.post("http://localhost:8080/laravel/laravel-10/pweb/be2/create.php", formData);
      setMsg("Data Berhasil Ditambah");
      setIsError(false);
      window.location.href = '/data_kost';
    } catch (error) {
      if (error.response) {
        setMsg("Data Gagal Ditambah");
        setIsError(true);
      }
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="z-999">
        <Notification message={msg} isError={isError} />
      </div>
      <div className="p-4 lg:w-1/2">
        <form
          onSubmit={saveMahasiswa}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nokamar"
            >
              No Kamar
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nokamar"
              type="text"
              placeholder="No Kamar"
              value={nokamar}
              onChange={(e) => setNpm(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="penghuni"
            >
              Nama Penghuni
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="penghuni"
              type="text"
              placeholder="Nama Penghuni"
              value={penghuni}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="harga"
            >
              Harga Kamar
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="harga"
              type="text"
              placeholder="Harga Kamar"
              value={harga}
              onChange={(e) => setKelas(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Tambah Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormTambahData;
