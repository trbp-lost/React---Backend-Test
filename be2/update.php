<?php
header('Content-Type: application/json'); // Mengatur header untuk mengindikasikan bahwa respon adalah JSON

// Mengizinkan permintaan dari domain React yang berjalan di http://localhost:3000
header('Access-Control-Allow-Origin: http://localhost:3000');

// Mengizinkan metode HTTP yang diizinkan
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

// Mengizinkan header yang diizinkan
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Pastikan metode OPTIONS mendapatkan respons yang benar
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json'); // Mengatur header untuk mengindikasikan bahwa respon adalah JSON
require('connection.php');

$response = array(); // Inisialisasi array respons

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    // Mengambil ID dari parameter URL
    $url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $parts = explode('/', $url);
    $id = end($parts);

    // Pastikan ID adalah angka (melakukan validasi jika perlu)
    if (is_numeric($id)) {
        $put_data = json_decode(file_get_contents("php://input"), true);

        if (isset($put_data['nokamar'])) {
            $nokamar = $put_data['nokamar'];
        } else {
            $nokamar = ''; // Atur ke nilai kosong jika tidak ada perubahan
        }

        if (isset($put_data['penghuni'])) {
            $penghuni = $put_data['penghuni'];
        } else {
            $penghuni = ''; // Atur ke nilai kosong jika tidak ada perubahan
        }

        if (isset($put_data['harga'])) {
            $kelas = $put_data['harga'];
        } else {
            $kelas = ''; // Atur ke nilai kosong jika tidak ada perubahan
        }

        $sql = "UPDATE kost_trbp SET nokamar='$nokamar', penghuni='$penghuni', harga='$kelas' WHERE id='$id'";

        if (mysqli_query($koneksi, $sql)) {
            $response['status'] = 'success';
            $response['message'] = 'Data dengan ID ' . $id . ' berhasil diperbarui.';
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Error: ' . $sql . '<br>' . mysqli_error($koneksi);
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'ID tidak valid.';
    }
} else {
    $response['status'] = 'error';
    $response['message'] = 'Metode HTTP tidak valid.';
}

mysqli_close($koneksi);

echo json_encode($response); // Mengirimkan respon dalam format JSON
?>