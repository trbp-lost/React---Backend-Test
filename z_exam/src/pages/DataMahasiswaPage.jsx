import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";
import Notification from "../components/Notification";

const DataMahasiswaPage = () => {
  const [mahasiswaData, setMahasiswaData] = useState([]);
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/laravel/laravel-10/pweb/be2/read.php");
      if (response.data.data.length >= 0) {
        setMahasiswaData(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.error("Error: " + error);
    }
  };
  const deleteMhs = async (mhsId) => {
    try {
      await axios.delete(`http://localhost:8080/laravel/laravel-10/pweb/be2/delete.php/${mhsId}`);
      setMsg("Data Delete Success");
      setIsError(false);
    } catch (error) {
      setMsg("Data Gagal Edit");
      setIsError(false);
    }
    // Memperbarui updateMemoryList
  };

  return (
    <Layout>
      <div className="z-999">
        <Notification message={msg} isError={isError} />
      </div>
      <div className="mt-5 container mx-auto">
        <h1 className="text-3xl font-semibold mb-3 text-center text-white">
          Data Penghuni Kost
        </h1>

        <div className="mt-4 mb-4">
          <a
            className="bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg"
            href="/tambah_data"
          >
            Tambah Data
          </a>
        </div>
        <table className="w-full border">
          <thead>
            <tr className="bg-purple-200">
              <th className="border border-black p-2">No</th>
              <th className="border border-black p-2">No Kamar</th>
              <th className="border border-black p-2">Penghuni</th>
              <th className="border border-black p-2">Harga</th>
              <th className="border border-black p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswaData.length > 0 ? (
              mahasiswaData.map((item, index) => (
                <tr key={item.id} className="bg-white">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{item.nokamar}</td>
                  <td className="border p-2">{item.penghuni}</td>
                  <td className="border p-2">{item.harga}</td>
                  <td className="border p-2">
                    <div className="grid grid-cols-2 text-center gap-2 px-2">
                      <a
                        className="bg-blue-500 hover-bg-blue-700 text-white p-2 rounded-lg"
                        href={`/edit_data/${item.id}`}
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Apakah Anda yakin ingin menghapus Penghuni Kost ini?"
                            )
                          ) {
                            deleteMhs(item.id);
                          }
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg"
                        href="/"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border p-2 text-center">
                  Data Penghuni Kost tidak tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default DataMahasiswaPage;
