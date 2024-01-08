import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Notification from "./Notification";

function FormEditData() {
  const [nokamar, setNpm] = useState("");
  const [penghuni, setNama] = useState("");
  const [harga, setKelas] = useState("");
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/laravel/laravel-10/pweb/be2/read_by_id.php/${id}`
        );

        // Inisialisasi nilai input dengan nilai dari server
        setNpm(response.data.data.nokamar);
        setNama(response.data.data.penghuni);
        setKelas(response.data.data.harga);
      } catch (error) {
        console.error("Error: " + error);
      }
    };
    getData();
  }, [id]);

  const updateMahasiswa = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/laravel/laravel-10/pweb/be2/update.php/${id}`, {
        nokamar: nokamar,
        penghuni: penghuni,
        harga: harga,
      });
      setMsg("Data Berhasil Edit");
      setIsError(false);
    } catch (error) {
      if (error.response) {
        setMsg("Data Berhasil Edit");
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
          onSubmit={updateMahasiswa}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nokamar"
            >
              NPM
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nokamar"
              type="text"
              placeholder="NPM"
              value={nokamar || ""} // Menambahkan nilai awal
              onChange={(e) => setNpm(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="penghuni"
            >
              Nama
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="penghuni"
              type="text"
              placeholder="Nama"
              value={penghuni || ""} // Menambahkan nilai awal
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="harga"
            >
              harga
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="harga"
              type="text"
              placeholder="harga"
              value={harga || ""} // Menambahkan nilai awal
              onChange={(e) => setKelas(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Edit Data
            </button>
            <a
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              href="/data_kost"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEditData;
